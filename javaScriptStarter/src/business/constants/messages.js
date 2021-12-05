export default class Messages {
    
    userReturned(){
        return "Kullanıcı iletildi."
    }

    userCreated(){
        return "Kullanıcı eklendi."
    }
    
    usersListed(){
        return "Kullanıcılar listelendi."
    }

    wrongUserName(name){
        return `${name} adı geçersiz.`
    }
}