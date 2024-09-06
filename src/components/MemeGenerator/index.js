import {Component} from 'react'

import {
  Heading,
  MainContainer,
  InputContainer,
  Label,
  InputElement,
  SelectElement,
  Button,
  MemeContainer,
  TopBottomHeading,
} from './styledComponents'

import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  // Step 1: Initializing state to handle both form data and the generated meme data
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 32,
    generatedMeme: null, // This will hold the meme data after clicking "Generate"
  }

  // Handlers to update state based on input
  handleImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  handleTopText = event => {
    this.setState({topText: event.target.value})
  }

  handleBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  handleFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  // Step 2: Handling the "Generate" button click
  handleButtonClick = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    // Step 3: Check if all fields are filled
    if (imageUrl && topText && bottomText && fontSize) {
      // If all fields are filled, set the generated meme state
      this.setState({
        generatedMeme: {
          imageUrl,
          topText,
          bottomText,
          fontSize,
        },
      })
    }
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, generatedMeme} = this.state

    return (
      <MainContainer testid="meme">
        <Heading>Meme Generator</Heading>

        <div className="container">
          {/* Step 4: Conditionally rendering the meme */}
          {generatedMeme && (
            <MemeContainer testid="meme" bgImage={generatedMeme.imageUrl}>
              <TopBottomHeading fs={generatedMeme.fontSize}>
                {generatedMeme.topText}
              </TopBottomHeading>
              <TopBottomHeading fs={generatedMeme.fontSize}>
                {generatedMeme.bottomText}
              </TopBottomHeading>
            </MemeContainer>
          )}

          <InputContainer>
            <Label htmlFor="imageUrl">Image Url</Label>
            <InputElement
              value={imageUrl}
              id="imageUrl"
              placeholder="Enter the Image Url"
              type="text"
              onChange={this.handleImageUrl}
            />
            <Label htmlFor="topText">Top Text</Label>
            <InputElement
              value={topText}
              id="topText"
              placeholder="Enter the Top Text"
              type="text"
              onChange={this.handleTopText}
            />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <InputElement
              value={bottomText}
              id="bottomText"
              placeholder="Enter the Bottom Text"
              type="text"
              onChange={this.handleBottomText}
            />
            <Label>Font Size</Label>
            <SelectElement value={fontSize} onChange={this.handleFontSize}>
              {fontSizesOptionsList.map(each => (
                <option value={each.displayText} key={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </SelectElement>

            {/* Step 5: Clicking the button triggers meme generation */}
            <Button onClick={this.handleButtonClick}>Generate</Button>
          </InputContainer>
        </div>
      </MainContainer>
    )
  }
}

export default MemeGenerator
