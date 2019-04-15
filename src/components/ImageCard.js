import React from 'react'
import { Link } from 'react-router-dom'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

     setSpans = () => {
        let height = this.imageRef.current.clientHeight,
            spans = height%10 === 0 ? height/10 + 1 : Math.ceil(height/10)

         this.setState({ spans })
    }

    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
              <Link to={this.props.link} >
                <img ref={this.imageRef} src={this.props.image} alt="" />
              </Link>
            </div>
        )
    }
}

export default ImageCard