export const createNav = ()=> {
    const nav = document.createElement("nav");
    nav.classList = "navbar navbar-expand-lg navbar-dark bg-dark";
  
    const navA = document.createElement("a");
    navA.classList = "navbar-brand";
    navA.innerText = "Lab WEBPACK";
    nav.appendChild(navA);
  
    const divNav = document.createElement("div");
    divNav.id = "navbarNav";
    divNav.classList = "collapse navbar-collapse";
  
    const ulCollapse = document.createElement("ul");
    ulCollapse.classList = "navbar-nav";
  
    const li1 = document.createElement("li");
    li1.classList = "nav-item active";
    const a1 = document.createElement("a");
    a1.classList = "nav-link";
    a1.href = "../home/index.html";
    a1.innerText = "Inicio";
    li1.appendChild(a1);

    const li2 = document.createElement("li");
    li2.classList = "nav-item ";
    const a2 = document.createElement("a");
    a2.classList = "nav-link";
    a2.href = "../extra/anim.html";
    a2.innerText = "Extra";
    li2.appendChild(a2);
  
    ulCollapse.appendChild(li1);
    ulCollapse.appendChild(li2);
  
    divNav.appendChild(ulCollapse);
  
    nav.appendChild(divNav);
    return nav;

}
  