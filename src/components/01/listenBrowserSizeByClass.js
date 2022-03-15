import * as React from 'react'
const withWindowSize = Component => {
    class WrappedComponent extends React.PureComponent{
        constructor(props){
            super(props)
            this.state = {
                size: this.getSize()
            }
        }
        componentDidMount(){
            window.addEventListener('resize', this.handleResize)
        }
        componentWillUnmount(){
            window.removeEventListener('resize', this.handleResize)
        }
        handleResize = () => {
            console.log(' I found window is resizing')
            const curSize = this.getSize()
            this.setState({
                size: curSize
            })
        }
        getSize = () => {
            return window.innerWidth > 500 ? 'large' : 'small'
        }
        render(){
            return <Component size = {this.state.size}/>
        }
    }
    return WrappedComponent;
}

class MyComponent extends React.Component{
    render(){
        const { size } = this.props
        if(size === 'large') return <div>large Component by class</div>
        return <div>small Component by class</div>
    }
}
export default withWindowSize(MyComponent)