import React, { Component } from 'react';
import {Avatar, Button, Col, Row, Statistic} from "antd";

export default class DisplayStatTrendCard extends React.Component {


    render() {
        return (
            <div className="StatTrend">
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Active Users" value={112893} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                        <Button style={{ marginTop: 16 }} type="primary">Recharge</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

