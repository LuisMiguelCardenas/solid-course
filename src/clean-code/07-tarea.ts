(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement


    class InputElement{

        public htmlElement: HtmlElement;
        public inputAtribbutes: InputAttributes;
        public inputEvents: InputEvents

        constructor(id:string,placeholder:string, value:string){

            this.htmlElement= new HtmlElement(id, 'input')
            this.inputAtribbutes= new InputAttributes(value, placeholder)
            this.inputEvents= new InputEvents()


        }
    }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()