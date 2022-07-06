class Tree1 {
    branch: string;
    constructor(branch: string) {
        this.branch = branch;
    }
}

//write classs using access modifier 
class Tree2 {
   
    constructor(public branch: string) {
        this.branch = branch;
    }
}
//end

//access modifiers used for classes and for methods too
class tree3{
//constructor(public branch:string, private leaf:string){
    constructor(public leaf:string){
    this.leaf = leaf;
}
   //we do not need to use word "function" to create a method here
  public moveLeaf(){
        // console.log("moving leaf");
   }
}
let mapleTree1 = new tree3("maple is red");

///////////////

class tree4{
   
        constructor(public leaf:string){
        this.leaf = leaf;
    }
      public moveLeaf(){
       
             //console.log(`the color of ${this.leaf} is red`);
       }
    }
    let mapleTree2 = new tree3("maple leaf");
    mapleTree2.moveLeaf();

    //class inheritance
    class Building1{
        windows: string = "window 1";

        escalators(){
            console.log("escalators are available");
        }
    }
    //const building1 = new Building1;
    //building1.escalators();


    //this calss should overwrite the parent class above
    class Building2 extends Building1{

        escalators(){
           // console.log(this.windows);
        }
    }
    const building2 = new Building2;
    building2.escalators();
/////////////////////////////////////////

    //an abstract class
   abstract class People1{
        displayData(){
           // console.log("display data...");
        }
    }
   class Kids1 extends People1{
        
    }
    let kidsClass = new Kids1;
    kidsClass.displayData();

///////////////////////////////////////
//GENERIC CLASSES

class objectGenericsClass1<TYPE1, TYPE2>{

constructor(public value1: TYPE1, public value2: TYPE2){


}
}

    let object1 = new objectGenericsClass1<string, number>("string", 4);
    let object2 =new objectGenericsClass1<string, boolean>("string", true);

    //the following two syntaxes are same
    let array1: number[] = [1,2,3];
    let array2: Array<number> = [1,2,3,4,5];//array generic

    //ClASS GENERICS CONSTRAINTS
    class objectGenericsClass2<TYPE1, TYPE2 extends string>{

        constructor(public value1: TYPE1, public value2: TYPE2){
        
        
        }
        }
        
        //let object3 = new objectGenericsClass2<string, number>("string", 4);//will not work due to "extends string" constraint
        let object3 = new objectGenericsClass2<string, string>("string", "another string");