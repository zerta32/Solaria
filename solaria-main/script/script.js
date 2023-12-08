function showMenu(menuId) {
    // Hide all menus
    var allMenus = document.querySelectorAll('.menu-content');
    allMenus.forEach(function(menu) {
        menu.style.display = 'none';
    });

    // Remove active class from all buttons
    var allButtons = document.querySelectorAll('.list-group-item');
    allButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Show the selected menu
    var selectedMenu = document.getElementById(menuId);
    if (selectedMenu) {
        selectedMenu.style.display = 'block';
    }

    // Add active class to the clicked button
    var clickedButton = document.querySelector('[onclick="showMenu(\'' + menuId + '\')"]');
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}
