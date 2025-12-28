
    self.addEventListener('install', (e) => {
        console.log('Singularity Node Installed');
    });
    self.addEventListener('fetch', (e) => {
        // Keeps the app running even with no internet
        e.respondWith(fetch(e.request));
    });
    