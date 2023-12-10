function openTab(tabId) {
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tabContent) {
      tabContent.classList.remove('active');
    });
  
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}
