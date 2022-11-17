import React from 'react';
import { Form, Input, Radio, Row, Col, InputNumber } from 'antd';

export default {
	render(canvasRef, form, data) {
		const { getFieldDecorator } = form;
		if (!data) {
			return null;
		}
		const layout = data.layout || 'fixed';
		return (
			<React.Fragment>
				<Form.Item label={'common.name'} colon={false}>
					{getFieldDecorator('name', {
						rules: [
							{
								required: false,
								message: 'validation.enter-arg',
							},
						],
						initialValue: data.name || '',
					})(<Input />)}
				</Form.Item>
				<Form.Item label={'common.layout'} colon={false}>
					{getFieldDecorator('layout', {
						initialValue: layout,
					})(
						<Radio.Group size="small">
							<Radio.Button value="fixed">{'common.fixed'}</Radio.Button>
							<Radio.Button value="responsive">{'common.responsive'}</Radio.Button>
							<Radio.Button value="fullscreen">{'common.fullscreen'}</Radio.Button>
						</Radio.Group>,
					)}
				</Form.Item>
				{layout === 'fixed' ? (
					<React.Fragment>
						<Row>
							<Col span={12}>
								<Form.Item label={'common.width'} colon={false}>
									{getFieldDecorator('width', {
										rules: [
											{
												required: true,
												message: 'validation.enter-arg'
											},
										],
										initialValue: data.width * data.scaleX,
									})(<InputNumber />)}
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item label={'common.height'} colon={false}>
									{getFieldDecorator('height', {
										rules: [
											{
												required: true,
												message: 'validation.enter-arg'
											},
										],
										initialValue: data.height * data.scaleY,
									})(<InputNumber />)}
								</Form.Item>
							</Col>
						</Row>
					</React.Fragment>
				) : null}
			</React.Fragment>
		);
	},
};
