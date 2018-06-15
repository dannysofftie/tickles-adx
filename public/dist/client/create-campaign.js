(function (f) {
    if (typeof module == 'undefined') {
        document.addEventListener('DOMContentLoaded', function () {
            f(document, window);
        });
    }
    else
        throw new Error('Cannot run in Node environment');
})(function (document, window) {
    var tabs = Array.from(document.querySelectorAll('.campaign-tab'));
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (div) {
                div.classList.remove('campaign-tab-active');
            });
            this.classList.add('campaign-tab-active');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUtY2FtcGFpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxVQUFDLENBQUM7SUFDQyxJQUFJLE9BQU8sTUFBTSxJQUFJLFdBQVcsRUFBRTtRQUM5QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7WUFDMUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtLQUNMOztRQUVHLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUN6RCxDQUFDLENBQUMsQ0FBQyxVQUFDLFFBQWtCLEVBQUUsTUFBYztJQUNsQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO1FBQ2IsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztnQkFDWixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQy9DLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==