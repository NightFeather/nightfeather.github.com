var xmlTime = function ( xmlString ) {
    var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/i;
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var match = pattern.exec(xmlString);
    return match[3] + " " + month[(match[2]-"")-1] + " " + match[1];
}
objGithubUser = function( userName, target){
    var baseUrl = "https://api.github.com/users/";
    this.doJSONp = function () {
        var temp = document.createElement("script");
        temp.src = baseUrl + userName + "/repos?type=all&sort=updated&callback=loadRepos";
        document.body.appendChild( temp );
    };
    this.loadRepos = function( gotObj ) {
        target = target.getElementsByTagName('ul')[0];
        var pack = document.createDocumentFragment();
        for (var i = 0; i <= gotObj.data.length-1; i++) {
            var temp = document.createElement("li");
            temp.innerHTML = "<a href=" + gotObj.data[i].html_url + " class=\"repo\">" + gotObj.data[i].name + "</a>"+
                "<span class=\"update\">" + xmlTime(gotObj.data[i].updated_at) + "</span>";
            pack.appendChild(temp);
        }
        target.appendChild(pack);
    };
    window.loadRepos = this.loadRepos;
};
