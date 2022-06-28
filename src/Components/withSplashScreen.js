import React, { Component } from 'react';
import styled from 'styled-components';
import {logo,logo_label} from "../Components/images_1"

function LoadingMessage() {
  return (
    <LogoWrap>
      <div className="my-logo">
            <img className='image_1' src={logo}/>
      </div>

    </LogoWrap>

  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1700)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;

const LogoWrap = styled.div`
.image_1{
  height:100px;
  width:150px;
  }

.my-logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:30px 30px;
  }
  }

`