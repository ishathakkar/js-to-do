// var item=document.getElementById("enter");
function enter()
{
var item=document.getElementById("four");

    const para=document.createElement("li");
    para.innerText=item.value;
    document.getElementById("finallist").appendChild(para);
    para.setAttribute("id","dnd2");
    // var item=document.getElementById("enter");
    const dnd=document.createElement("button");
    dnd.innerText="close";
    document.getElementById("dnd2").appendChild(dnd);
    item.value="";
    dnd.onclick=function()
    {
        para.setAttribute("id","boom");
    }
    para.setAttribute("id","dc");
}

