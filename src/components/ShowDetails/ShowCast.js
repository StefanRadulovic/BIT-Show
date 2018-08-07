import React, { Component } from 'react';

import ShowCastList from'./displayCast/ShowCastList';
import ShowCastGrid from './displayCast/ShowCastGrid';

class ShowCast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isList: false
          
        }
        this.onClickHandler=this.onClickHandler.bind(this)
    }
    onClickHandler(){
        this.setState((prevState)=>{
            window.localStorage.setItem('actorsView',!prevState.isList)
            return({
                isList: !prevState.isList
            })
        })
    }
    componentDidMount(){
       
        
        if(window.localStorage.getItem('actorsView')!=null){
        this.setState({
            
                isList:JSON.parse(window.localStorage.getItem('actorsView'))
            })
        
    }else{
        window.localStorage.setItem('actorsView',this.state.isList)
    }
}
    render() {
        return (
            <React.Fragment>
                <div className='col s12'>
                <hr />
                    <div className="row">
                        <h4 className="left">Actors</h4>
                        <span className="right" onClick={this.onClickHandler}>
                         {(this.state.isList)? <i className="medium material-icons hov">view_module</i> : <i className="medium material-icons hov">view_list</i>}
                        </span>
                    </div>
                </div>
                
                {(this.state.isList) ? <ShowCastList actors={this.props} /> : <ShowCastGrid actors={this.props}/>}
            </React.Fragment>
        )
    }
}

export default ShowCast