class contactsOfPersons{
    constructor(firstName,lastName,address,city,state,email,phoneNumber,zip)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
        this.city=city
        this.state=state
        this.email=email
        this.phoneNumber=phoneNumber
        this.zip=zip
    }
    displayDetails()
    {
        console.log("First Name:"+this.firstName)
        console.log("Last Name:"+this.lastName)
        console.log("Address "+this.address)
        console.log("city="+this.city)
        console.log("state="+this.state)
        console.log("email="+this.email)
        console.log("Phone number="+this.phoneNumber)
        console.log("zip="+this.zip)
    }
}
var ContactsObj=new contactsOfPersons("Dablu","Paswan","Sudnay Bazar","Bokaro","Jharkhand","W@gmail.com",2636737,123)
ContactsObj.displayDetails()