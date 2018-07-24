import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Article } from 'ui';

const Wrapper = styled.article`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

class GridArticles extends PureComponent {
    static propTypes = {
        data: PropTypes.arrayOf(String)
    }

    render() {
        const { data } = this.props;

        return (
            <Wrapper>
                {
                    data.map((el, i) => (
                        <Article key={i} title={el.title} img={el.img}>{el.title}</Article>
                     )
                    )
                }
            </Wrapper>
        );
    }
}

export default GridArticles;