import React, {Component} from 'react';
import {ART, StyleSheet, Text, View} from 'react-native';


export default class RoundView extends Component {


  _getBgShap=(radius)=>{
      let path = ART.Path()
      .moveTo(radius,0)
      .arc(0,radius*2,radius)
      .arc(0,-radius*2,radius)
      .close();               
      
      return (        
        <ART.Shape d={path} fill='gray' stroke="#000000" strokeWidth={1} />        
      )
  }

  _getRoundLine=(radius,percent)=>{    
//    Math.sqrt  求平方根
//    2*(Math.PI/360) *agnleA   求agnleA角度的弧度
//    Math.cos(X) 计算弧度的余弦
   let agnleA = percent * 0.01 * 360
//    agnleA = 30
   let RoundAngleA = (2*Math.PI/360) *agnleA   
   let c = Math.sqrt((radius*radius*2-2*radius*radius*Math.cos(RoundAngleA)))
   
   let angleB = (180-agnleA)*0.5
   let RoundAngleB = 2*(Math.PI/360) *angleB   
   let positionX = c * Math.cos(RoundAngleB) 

   console.warn('RoundAngleA===>',RoundAngleA,'c=====>',c,'cos(agnleA)==>',Math.cos(RoundAngleA))
   console.warn('positionX==>',positionX)

   let positionY = Math.sqrt(Math.pow(c,2)-Math.pow(positionX,2))
   console.warn('positionY==>',positionY)

    let path = ART.Path()
    .moveTo(radius,0)
    .arc(30,40,50)
    // .arc(-50,50,50)
    // .arc(-50,-50,50)
    // .arc(50,-50,50)
    // .close()
    // .arc(radius*2-positionX,positionY,radius)    
    // .arc(radius+radius-positionX,positionY,radius)   
    // .lineTo(radius*2-positionX,positionY)   
    // .lineTo(50,50)
    // .close()
    // .lineTo(50,50)   
    
    return (        
      <ART.Shape d={path} stroke="red" strokeWidth={3} />        
    )
  }

  render(){
    const {radius,percent} = this.props

        return(
            <View style={this.props.style}>
            <ART.Surface width={200} height={200}>
                {this._getBgShap(radius)}
                {this._getRoundLine(radius,percent)}
            </ART.Surface>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    height:200,
    width:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }  
});

RoundView.defaultProps={
   radius:50,
//    percent:25,
    percent:8.3,
}
