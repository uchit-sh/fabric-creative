import React from 'react';
import { Form, Select, Switch, Input } from 'antd';

export default {
	render(canvasRef, form, data) {
		const { getFieldDecorator } = form;
		return (
			<React.Fragment>
				<Form.Item label={'imagemap.link.link-enabled'} colon={false}>
					{getFieldDecorator('link.enabled', {
						rules: [
							{
								required: true,
								message: 'validation.enter-property',
							},
						],
						valuePropName: 'checked',
						initialValue: data.link.enabled,
					})(<Switch size="small" />)}
				</Form.Item>
				{data.link.enabled ? (
					<React.Fragment>
						<Form.Item label={'common.state'} colon={false}>
							{getFieldDecorator('link.state', {
								initialValue: data.link.state || 'current',
							})(
								<Select>
									<Select.Option value="current">{'common.current'}</Select.Option>
									<Select.Option value="new">{'common.new'}</Select.Option>
								</Select>,
							)}
						</Form.Item>
						<Form.Item label={'common.url'} colon={false}>
							{getFieldDecorator('link.url', {
								rules: [
									{
										required: true,
										message: 'validation.enter-property'
									},
								],
								initialValue: data.link.url || '',
							})(<Input />)}
						</Form.Item>
					</React.Fragment>
				) : null}
			</React.Fragment>
		);
	},
};
