import React from 'react';
import { Col, Row } from 'antd';
import G2test3d from './G2test3d';
import Area from "./Area";
import CardComponent from './CardComponent';

import { cardImage1, cardImage2, cardImage3, avatar } from '../../../assets/images/IndexImage';


const Overview: React.FC = () => {
    return (
        <>
            <Row justify="space-evenly">
                <Col span={5}>
                    <CardComponent
                        title='TiTle'
                        description='在此编辑文案'
                        coverImage={cardImage3}
                        avatarImage={avatar}
                    />
                </Col>
                <Col span={5}>
                    <CardComponent
                        title='TiTle'
                        description='在此编辑文案'
                        coverImage={cardImage2}
                        avatarImage={avatar}
                    />
                </Col>
                <Col span={5}>
                    <CardComponent
                        title='TiTle'
                        description='在此编辑文案'
                        coverImage={cardImage1}
                        avatarImage={avatar}
                    /></Col>
                <Col span={5}>
                    <CardComponent
                        title='TiTle'
                        description='在此编辑文案'
                        coverImage={cardImage3}
                        avatarImage={avatar}
                    /></Col>
            </Row>
            <Row justify="space-evenly">
                <Col span={10}><G2test3d /></Col>
                <Col span={10}><Area /></Col>
            </Row>
        </>
    );
}

export default Overview;