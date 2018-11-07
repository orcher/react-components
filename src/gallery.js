import React, {Component} from 'react'
import styled from 'styled-components'

const GalleryMainBox = styled.div`
    display: flex;
    flex-flow: row;
    margin: 10px;
`

const GalleryItemsBox = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: ${props => props.width};
    height: ${props => props.height};
    background: lightgray;
`

const GalleryBtn = styled.div`
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;
    background: lightgray;
    :hover {
        background: gray;
    }
`

const GalleryLeftBtn = styled(GalleryBtn)`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

const GalleryRightBtn = styled(GalleryBtn)`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

const GalleryItem = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;

    width: ${props => props.selected ? '100%' : '0'};
    height: ${props => props.selected ? '100%' : '0'};
    opacity: ${props => props.selected ? '1' : '0'};
    transition-duration: .5s; 
`

const GalleryContentBox = styled.div`
    display: flex;
    flex-flow: column;
`

const GalleryProgressBar = styled.div`
    height: 10px;
    width: ${props => props.progress}%;
    background: gray;
    margin-top: 5px;
`

class Gallery extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            count: 0,
        }
        this.state.count = this.props.showN === undefined ? 1 : this.props.showN
    }

    getProgress = () => {
        return Math.ceil(((this.state.index + 1) / this.props.content.length) * 100)
    }

    handleIncrement = () => {
        if(this.state.index < this.props.content.length - 1){
            this.setState({
                index: this.state.index + 1,
            })
        }
    }

    handleDecrement = () => {
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - 1,
            })
        }
    }

    renderContent = () => {
        const items = []
        for(let i = 0; i < this.props.content.length; ++i){
            const selected = i >= this.state.index && i < this.state.index + this.state.count
            items.push(
                <GalleryItem 
                    key={i}
                    selected={selected}
                >
                    {this.props.content[i]}
                </GalleryItem>
            )
        }
        return items
    }

    render() {
        return(
            <GalleryMainBox>
                <GalleryLeftBtn onClick={() => this.handleDecrement()}></GalleryLeftBtn>
                <GalleryContentBox>
                    <GalleryItemsBox 
                        width={this.props.width !== undefined ? this.props.width : null} 
                        height={this.props.height !== undefined ? this.props.height : null}
                    >
                        {this.renderContent()}
                    </GalleryItemsBox>
                    <GalleryProgressBar progress={this.getProgress()}/>
                </GalleryContentBox>
                <GalleryRightBtn onClick={() => this.handleIncrement()}> </GalleryRightBtn>
            </GalleryMainBox>
        )
    }
}

export default Gallery
