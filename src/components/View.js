// @flow
// @jsx glam
import React from 'react';
import glam from 'glam';

import { Div, Img } from '../primitives';
import { type PropsWithStyles } from '../types';
import { className } from '../utils';
import { getSource } from './component-helpers';
import componentBaseClassNames from './componentBaseClassNames';

type Props = PropsWithStyles & {
  data: Object,
  isFullscreen: boolean,
  isModal: boolean,
};

export const viewCSS = () => ({
  lineHeight: 0,
  position: 'relative',
  textAlign: 'center',
});

const viewBaseClassName = componentBaseClassNames.View;

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  render() {
    const { loaded } = this.state;
    const {
      data,
      formatters,
      getStyles,
      index,
      isFullscreen,
      isModal,
      loadingView,
    } = this.props;
    const innerProps = {
      alt: formatters.getAltText({ data, index }),
      src: getSource({ data, isFullscreen }),
    };

    return (
      <Div
        css={getStyles(viewBaseClassName, this.props)}
        className={className(viewBaseClassName, { isFullscreen, isModal })}
      >
        {!loaded && loadingView}

        <Img
          {...innerProps}
          className={className('view-image', { isFullscreen, isModal })}
          onLoad={() => {
            this.setState({ loaded: true });
          }}
          css={{
            height: 'auto',
            maxHeight: '100%',
            maxWidth: '100%',
            userSelect: 'none',
            display: loaded ? 'block' : 'none',
          }}
        />
      </Div>
    );
  }
}

export default View;
