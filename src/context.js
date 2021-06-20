
import React, { Component } from 'react';





const SystemContext = React.createContext();
// Provider
// Consumer

class SystemProvider extends Component {
  
  data;
  state = {
    modalOpen: false,
    modalProduct: 0,
    isLogin: false,
    user:{
      userName:'',
      permission:''
    },
    LoginOpen: false,
    SignUpOpen: false,
    AddProOpen:false,
    isEdit:false
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true }
    })
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  openLogin=()=>{
    this.setState(()=>{
      return { LoginOpen:true}
    })
  }
  closeLogin=()=>{
    this.setState(()=>{
      return { LoginOpen:false}
    })
  }
  openSignUp = () => {
    this.setState(()=>{
      return { SignUpOpen: true}
    })
  }
  openAddPro = ()=>{
    this.setState(()=>{
      return { AddProOpen: true}
    })
  }
  closeAddPro = ()=>{
    this.setState(()=>{
      return { AddProOpen: false}
    })
  }
  openUpdPro = ()=>{
    this.setState(()=>{
      return { UpdProOpen: true}
    })
  }
  closeUpdPro = ()=>{
    this.setState(()=>{
      return { UpdProOpen: false}
    })
  }
  closeSignUp = () =>{
    this.setState(()=>{
      return { SignUpOpen: false}
    })
  }
  setUser = (user) =>{
    if(user){
      this.setState(()=>{
        return { user: user}
      })
    }
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  setLogin=()=>{
    if(this.state.isLogin === false){
      this.setState(()=>{
        return { isLogin: true}
      })
    }else{
      this.setState(()=>{
        return { isLogin: false}
      })
    }
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  setEditMode=()=>{
    if(this.state.isEdit === false){
      this.setState(()=>{
        return { isEdit: true}
      })
    }else{
      this.setState(()=>{
        return { isEdit: false}
      })
    }
    localStorage.setItem('State',JSON.stringify(this.state));
  }
  Logout=()=>{
    this.setLogin()
    localStorage.removeItem('State');
    
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }
  setProducts = (products) =>{
    if(products){
      this.setState(()=>{
        return {products:products}
      })
    }
    
  }

  shuffle(array){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    return (
      <SystemContext.Provider value={{
        ...this.state,
        openModal: this.openModal,
        closeModal: this.closeModal,
        openLogin:this.openLogin,
        closeLogin:this.closeLogin,
        openSignUp:this.openSignUp,
        closeSignUp:this.closeSignUp,
        setUser:this.setUser,
        Logout:this.Logout,
        setLogin:this.setLogin,
        setEditMode:this.setEditMode,
      }}>
        {this.props.children}
      </SystemContext.Provider>
    )
  }
}

const SystemConsumer = SystemContext.Consumer;

export { SystemProvider, SystemConsumer };