
class userType {
    readonly name: string;
    readonly email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    
    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
    points: number[] = [1,2,3,4,5,6,7,8,9,10];

    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */ 

    //users: userType[] = [new userType('a','email@hu.hu'), new userType('b', 'bmail@hu.hu')];
    users: {name: string, email: string}[] = [{name: 'a', email: 'email@hu.hu'}, {name: 'b',  email: 'bmail@hu.hu'}];

    
    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */    
     products: {name: string, price: number, stock: number, active?: boolean}[] = [{name: 'a', price: 99, stock: 4, active: true}, {name: 'b',  price: -8, stock: -9}];


    
    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean] = [1,'a',true];


}
