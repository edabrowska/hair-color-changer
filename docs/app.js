document.addEventListener('DOMContentLoaded', function () { const closeBtn = document.getElementById('close-btn'); const subscribeBtn = document.getElementById('subscribe-btn'); closeBtn.addEventListener('click', () => { console.log('close') }); subscribeBtn.addEventListener('click', () => { console.log('subscribe') }) })