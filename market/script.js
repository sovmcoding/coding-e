const checkbox = document.getElementById('check__navbar__section');

if (checkbox.checked) {
    checkbox.checked = false
}

checkbox.addEventListener('change', function() {
    if(this.checked) {
        vission = document.getElementById('vission')
        mission = document.getElementById('mission')
        vission.style.display = 'inherit';
        mission.style.display = 'none';
    } else {
        vission = document.getElementById('vission')
        mission = document.getElementById('mission')
        vission.style.display = 'none';
        mission.style.display = 'inherit';
    }
})