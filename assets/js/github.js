var xmlTime = function ( xmlString ) {
    var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/i;
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var match = pattern.exec(xmlString);
    return match[3] + " " + month[(match[2]-"")-1] + " " + match[1];
}
objGithubUser = function( userName, target){
    genLoading = function ( attr ) {
        var el =  document.createElement( attr.type );
        el.style.background = attr.bgcolor + " url(" + attr.image + ") no-repeat center";
        el.style.width = "100%";
        el.style.height = "150px";
        return el;
    }
    var baseUrl = "https://api.github.com/users/";
    var loading = genLoading (
                                             {
                                                type: "li",
                                                bgcolor: "#bbbabb",
                                                image: "assets/pics/loading.gif"
                                             }
                                             )
    this.doJSONp = function () {
        target.appendChild( loading );
        var temp = document.createElement("script");
        temp.src = baseUrl + userName + "/repos?type=all&sort=updated&callback=loadRepos";
        document.body.appendChild( temp );
    };
    this.loadRepos = function( gotObj ) {
        var pack = document.createDocumentFragment();
        for (var i = 0; i <= gotObj.data.length-1; i++) {
            var temp = document.createElement("li");
            temp.innerHTML = "<a href=" + gotObj.data[i].html_url + " class=\"repo two first\">" + gotObj.data[i].name + "</a>"+
                "<span class=\"update two last\">" + xmlTime(gotObj.data[i].updated_at) + "</span>";
            pack.appendChild(temp);
        }
        target.removeChild(loading);
        target.appendChild(pack);
    };
    window.loadRepos = this.loadRepos;
};
