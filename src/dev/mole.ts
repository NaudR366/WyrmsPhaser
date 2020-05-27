class Mole {
    
    private div : HTMLElement
    private x : number
    private y : number
    private speed : number = 3
    private molHP : number = 3
    private akey: number
    private gotHit : boolean 
    //private hpBar: HTMLElement
    
    constructor() {
        this.div = document.createElement("mole")
        //this.hpBar = document.createElement("hpBar")
        this.akey = 75

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)
       // game.appendChild(this.hpBar)
        
        this.x = 1300
        this.y = window.innerHeight - this.div.clientHeight
        this.gotHit = false

        console.log(this.molHP);
        

        window.addEventListener("keydown", (event: KeyboardEvent) => this.onKeyDown(event))
        window.addEventListener("keyup", (event: KeyboardEvent) => this.onKeyUp(event))
    }

    private onKeyDown(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.akey:
                this.gotHit = true
                break;
        }
    }

    private onKeyUp(event: KeyboardEvent): void {
        switch (event.keyCode) {
            case this.akey:
                break;
        }
    }

    public update() : void {
        this.x += this.speed
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`

        if (this.molHP == 2) {
            //this.hpBar.className = "heart1"
        }

        if (this.gotHit == true) {
            this.molHP = this.molHP - 1
            console.log(this.molHP);
            
            this.gotHit = false
        }

        if (this.molHP < 1) {
            this.div.style.backgroundImage = "url('')"
            this.molHP = this.molHP = 4
        }

        if (this.x > 1800) {
            this.div.className = "mole2"
            this.speed = -3
        } else if (this.x < 1200) {
            this.div.className = "mole"
            this.speed = 3
        }
    }
    
}
