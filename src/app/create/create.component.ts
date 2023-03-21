import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup} from '@angular/forms'
import { ApiserviceService } from '../apiservice.service';
import{ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  constructor(private service:ApiserviceService,private router:ActivatedRoute ,private route:Router){}
  errormsg:any;
  successmsg:any;
  getparamid:any;
  ngOnInit(): void {

    this.getparamid=this.router.snapshot.paramMap.get('id');
   
   
   if(this.getparamid) {
    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res=>');
      this.productForm.patchValue({
        'id':res.data[0].id,
        'title':res.data[0].title,
        'category':res.data[0].category,
        'description':res.data[0].description,
        'image':res.data[0].image,
        'price':res.data[0].price,
        'rating_rate':res.data[0].rating_rate,
        'rating_count':res.data[0].rating_count
      
      
      })
      
          })
   }
  

  }
  productForm=new FormGroup({
'id':new FormControl(''),
'title':new FormControl(''),
'price':new FormControl(''),
'description':new FormControl(''),
'category':new FormControl(''),
'image':new FormControl(''),
'rating_rate':new FormControl(''),
'rating_count':new FormControl(''),

  })
  //create New Product
  productSubmit(){
    if(this.productForm.valid){
      console.log(this.productForm.value)
      this.service.createData(this.productForm.value).subscribe((res)=>{
        console.log(res,'res')
        this.productForm.reset();
        this.successmsg=res.message;
        this.route.navigate(['read'])
      })
    }
    else{
      this.errormsg="Something went Wrong please check your Data"

  }
 

  }
  //update product
  productUpdate(){
console.log(this.productForm.value);
if(this.productForm.valid){
  this.service.updateData(this.productForm.value,this.getparamid).subscribe((res)=>{
    console.log(res,'resUpdated');
    this.successmsg=res.message;


  })
}else{
  this.errormsg='all fields are required'
}

  }

}
