import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.imageRef.current)

        let height = this.imageRef.current.clientHeight,
          spans = height%10 === 0 ? height/10 + 1 : Math.ceil(height/10)

        this.setState({ spans })
    }

    render() {

        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={this.props.image} />
            </div>
        )
    }
}

export default ImageCard