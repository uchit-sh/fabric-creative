import React from 'react';
import { Form, Radio } from 'antd';

import UrlModal from '../../components/common/UrlModal';
import FileUpload from '../../components/common/FileUpload';

export default {
	render(canvasRef, form, data) {
		const { getFieldDecorator } = form;
		if (!data) {
			return null;
		}
		const imageLoadType = data.imageLoadType || 'file';
		return (
			<React.Fragment>
				<Form.Item label={'imagemap.image.image-load-type'} colon={false}>
					{getFieldDecorator('imageLoadType', {
						initialValue: imageLoadType,
					})(
						<Radio.Group size="small">
							<Radio.Button value="file">{'imagemap.image.file-upload'}</Radio.Button>
							<Radio.Button value="src">{'imagemap.image.image-url'}</Radio.Button>
						</Radio.Group>,
					)}
				</Form.Item>
				{imageLoadType === 'file' ? (
					<Form.Item label={'common.file'} colon={false}>
						{getFieldDecorator('file', {
							rules: [
								{
									required: true,
									message: 'validation.enter-property'
								},
							],
							initialValue: data.file,
						})(<FileUpload accept="image/*" />)}
					</Form.Item>
				) : (
					<Form.Item>
						{getFieldDecorator('src', {
							initialValue: data.src,
						})(<UrlModal form={form} />)}
					</Form.Item>
				)}
			</React.Fragment>
		);
	},
};
