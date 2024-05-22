import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
images =[
  {
    title: `Sewing machine`,
    url:
    `https://images.unsplash.com/photo-1626274890657-e28d5b65b04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`
  },{
    title: "Tshirt",
    url:
    `https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60`

    },{
      title:`Skirt`,
      url: `https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60`
      },{
        title:" Dress",
        url: `https://images.unsplash.com/photo-1623609163859-ca93c959b98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60`
},{
  title:`Skirt`,
  url: `https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60`
  },{
    title:" Dress",
    url: `https://images.unsplash.com/photo-1623609163859-ca93c959b98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60`
  }
  ,{
    title:`Skirt`,
    url: `https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60`
    },{
      title:" Dress",
      url: `https://images.unsplash.com/photo-1623609163859-ca93c959b98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60`
    }
]
changePage(page: number) {
  if (page >= 0 && page < this.images.length) {
    this.currentPage = page;
  }
}



checkWindowIndex(index: number){

  
  return Math.abs(this.currentPage - index) < 5;
}
}
