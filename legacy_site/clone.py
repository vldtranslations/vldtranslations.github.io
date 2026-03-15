import requests
import os
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

base_url = "https://vldtranslations.com/"
output_dir = "."

def download_file(url, folder):
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        if not filename:
            filename = "index.html"
            
        # Keep directory structure
        path_dir = os.path.dirname(parsed.path).lstrip('/')
        target_dir = os.path.join(output_dir, folder, path_dir)
        os.makedirs(target_dir, exist_ok=True)
        
        filepath = os.path.join(target_dir, filename)
        
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
                
        return os.path.relpath(filepath, output_dir).replace('\\', '/')
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return None

def clone():
    print(f"Cloning {base_url}...")
    response = requests.get(base_url)
    response.raise_for_status()
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Download CSS
    for link in soup.find_all('link', rel='stylesheet'):
        href = link.get('href')
        if href:
            full_url = urljoin(base_url, href)
            local_path = download_file(full_url, 'assets/css')
            if local_path:
                link['href'] = local_path
                print(f"Downloaded CSS: {full_url}")

    # Download Javascript
    for script in soup.find_all('script'):
        src = script.get('src')
        if src:
            full_url = urljoin(base_url, src)
            local_path = download_file(full_url, 'assets/js')
            if local_path:
                script['src'] = local_path
                print(f"Downloaded JS: {full_url}")

    # Download Images
    for img in soup.find_all('img'):
        src = img.get('src')
        if src:
            full_url = urljoin(base_url, src)
            local_path = download_file(full_url, 'assets/img')
            if local_path:
                img['src'] = local_path
                print(f"Downloaded Image: {full_url}")

    # Write modified HTML
    with open(os.path.join(output_dir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(str(soup))
        
    print("Done cloning!")

if __name__ == '__main__':
    clone()
