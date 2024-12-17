import Input from "../subcomponent/Input";
function AddProduct(){
    return(
        <>
         <div className="w-full h-full flex flex-col">
            <h1 className="LargeText text-slate-950">Add new product</h1>
            <div className=" flex flex-col space-y-6 pt-3  ">
              <div className="space-y-1">
                  <p className="MeduimText text-slate-950">name product</p>
                  <div className=" w-56  lg:w-72"><Input placeholder="name product"/></div>
              </div>
              <div className="space-y-1">
                  <p className="MeduimText text-slate-950">price one package </p>
                  <div className=" w-56  lg:w-72"><Input placeholder="pleace enter numbers only"/></div>
              </div>
              <div className="space-y-1">
                  <p className="MeduimText text-slate-950">number of unit</p>
                  <div className=" w-56  lg:w-72"><Input placeholder="pleace enter numbers only"/></div>
              </div>
              <div>
                  <p className="MeduimText text-slate-950">image product</p>
                  <input type="file"></input>
              </div>
                
            </div>

         </div>
        </>
    )
}

export default AddProduct;