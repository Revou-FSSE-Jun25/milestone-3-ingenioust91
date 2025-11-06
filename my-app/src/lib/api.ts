export async function getProduct(id:string){
  try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
  }
  catch(Error:any) {
      return [];
  }

}

export async function getProducts(offset : number){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=12`, {next: { revalidate: 60 }})

      if (!response.ok) throw new Error("Gagal fetch produk");
      
      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function categoryFetch(slug:string){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?categorySlug=${slug}&offset=0&limit=12`, {next: { revalidate: 60 }})

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
    }
    catch(Error:any) {
      return null;
    }
  }

export async function searchbyTitle(title:string){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${title}`)

      if (!response.ok) throw new Error("Gagal fetch produk");
      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function getProductsAdmin(){
    try{
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`, {next: { revalidate: 60 }})

      if (!response.ok) throw new Error("Gagal fetch produk");

      return response.json();
    }
    catch(Error:any) {
      return [];
    }
  }

export async function deleteProduct(id: number) {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const result = await response.json()
      return { success: false, message : result.message };
    }

    alert('Delete Product : SUCCESS');
    return { success: true, code: 200 };
  } catch (error) {
    return { success: false, code: 500 };
  }
}


export async function login(email: any, password:any){
  try{
    const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`,{
      method: "POST",
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        email : email,
        password : password,
        expiresInMins: 30, // optional, defaults to 60
      })
    })
    return response.json();
  }
  catch(Error:any) {
    throw new Error("Gagal fetch user")
  }
} 