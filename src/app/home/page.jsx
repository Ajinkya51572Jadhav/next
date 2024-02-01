    "use client";
     {/* <Image src={img} alt="product"/>  */}
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../productApi/page.js';
import Link from 'next/link';


export default function page() {
   
  console.log(data);
  
    return (
    
    <div style={{display:"flex",flexWrap:"wrap"}}>

            {
                data.map((elm,index,arr)=>(
                  
                    <Link href={`/cart/${elm.id}`}>
                    <Card sx={{ maxWidth:"400%" , margin:2,padding:15}}>
                    <CardMedia
                      sx={{ width:100, height: 140 }}
                      image={elm.url}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                       {elm.productName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                       Details : {elm.details}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Price :  ₹{elm.price}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Stock :  {elm.stock}
                      </Typography>
                    </CardContent>
                      <button style={{color:'blue',padding:5 ,borderRadius:5}}>Add To Cart </button>
                  </Card>
                  </Link>                
              
                ))
            }

    
    
  
    </div> 
   
  );
}
