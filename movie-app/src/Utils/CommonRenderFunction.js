import React from 'react'

const CommonRenderFunction = (props) => {
    const myList = props?.myList 
  return (
      <>
    {
        myList?.map((item,index)=>{
            return(
                    <div key={index} className="each_card">
                       <div className="img_style"><img src={item.image} /></div> 
                        <div className="title_style">{item.title}</div>
                        <div className="btn_style">
                            <img style={{paddingRight:'40px'}} src={require(`../assets/images/Unionadd.png`)} />
                            <img src={require(`../assets/images/Vectorplay.png`)} />
                        </div>
                    </div>
            )
        })
    }
    </>
  )
}

export default CommonRenderFunction