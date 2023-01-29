class Subject{
    constructor(){
        this.observers = []
    }
    subscribeObserver(observer){
        this.observers.push(observer)
    }
    unsubscribeObserver(observer){
        this.observers = this.observers.filter((item) => item !== observer)
    }
    notifyObserver(observer){
        let index = this.observers.indexOf(observer)
            if(index > -1){
                this.observers[index].dial()
            }
    }
    notifyAllObservers(){
        for(let i = 0; i < this.observers.length; i++){
            this.observers[i].dial(i)
        }
    }
}

const PhoneNumber = function(number){
    return{
        dial: function(){
            console.log("Dialing... " + number) 
        }
    }
}

//Instantiating the Subject
const subject = new Subject()

//Create Phone Numbers Instance
const observer1 = new PhoneNumber("08165812262")
const observer2 = new PhoneNumber("07018495XXX")
const observer3 = new PhoneNumber("0906XXX6477")
const observer4 = new PhoneNumber("XXX46473838")

//Subscribe Observer
subject.subscribeObserver(observer1)
subject.subscribeObserver(observer2)
subject.subscribeObserver(observer3)
subject.subscribeObserver(observer4)

//Notifies a particular observer
console.log("observer1 (PhoneNumber1) is being Dialed")
subject.notifyObserver(observer1)

console.log("\n")//Formating my output

//Notifies all the Observers
console.log("All the Phone numbers are being Dialed")
subject.notifyAllObservers()


//Unsubscribing observer1 (PhoneNumber1) is unsubscribed)
subject.unsubscribeObserver(observer1)
console.log("\nobserver1 (PhoneNumber1) has been Unsubscribed")


console.log("\nThe remaining 3 Phone numbers are being Dialed")
subject.notifyAllObservers()