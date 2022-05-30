import { Typography, Button, Divider, Paper } from '@mui/material';
import { FaHashtag } from 'react-icons/fa';
import { Editor, EditorState } from 'react-draft-wysiwyg';
import { useState } from 'react';
import DraggableList from '../common/DraggableList/DraggableList';

const Events = () => {
	const [editorState, setEditorState] = useState<EditorState>();

	return (
		<div>
			<div className="flex justify-between items-end">
				<Typography variant="h5">EVENTS</Typography>
				<div>
					<Button variant="outlined" color="error">
						Cancel
					</Button>
					<Button variant="contained" color="success" sx={{ ml: 2 }}>
						Save
					</Button>
				</div>
			</div>

			<Divider light sx={{ mt: 2, mb: 3 }} />

			<div className="text-xl mb-4 font-medium flex items-center">
				<FaHashtag className="text-sm text-site-1 mr-2" />
				<div>Description</div>
			</div>

			<div className="mb-8">
				<Typography paragraph={true}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
					delectus deleniti accusamus. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Molestias obcaecati cum, possimus magni quasi quas
					corporis modi quod saepe et ea molestiae id officiis facilis. Aperiam
					exercitationem quibusdam eveniet vitae?
				</Typography>
			</div>

			<div className="mb-16">
				<Paper elevation={1}>
					<Editor
						editorState={editorState}
						toolbarClassName="wyswyg-editor__toolbar"
						wrapperClassName="wyswyg-editor"
						editorClassName="wyswyg-editor__editor"
						onEditorStateChange={setEditorState}
					/>
				</Paper>
			</div>

			<div className="text-xl mb-4 font-medium flex items-center">
				<FaHashtag className="text-sm text-site-1 mr-2" />
				<div>Image</div>
			</div>

			<div className="mb-8">
				<Typography paragraph={true}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
					delectus
				</Typography>
			</div>

			<div className="mb-16">
				<div className="flex">
					<Paper elevation={1} className="px-8 pt-8 pb-6">
						<div className="mb-8">
							<img
								src="https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								className="rounded bordered-img"
							/>
						</div>

						<div className="flex justify-end">
							<Button sx={{ mr: 2 }} variant="outlined" color="error">
								Cancel
							</Button>
							<div>
								<label
									htmlFor="file-input-1"
									className="inline-block py-2 text-sm px-5 rounded bg-site-1 text-white cursor-pointer"
								>
									New image
								</label>
								<input type="file" id="file-input-1" className="hidden" />
							</div>
						</div>
					</Paper>
				</div>
			</div>

			<div className="text-xl mb-4 font-medium flex justify-between">
				<div className="flex items-center">
					<FaHashtag className="text-sm text-site-1 mr-2" />
					<div>EVENTS LIST</div>
				</div>
			</div>

			<div className="mb-2">
				<Typography paragraph={true}>
					Facilis eaque dicta aspernatur assumenda autem, asperiores,
					reprehenderit eos vero sapiente officiis? Deleniti accusamus dolorem
					natus nesciunt inventore, exercitationem vitae reprehenderit eos vero
					sapiente officiis?
				</Typography>
			</div>

			<div className="text-right mb-8">
				<Button sx={{ mr: 2 }} variant="contained" color="primary">
					New event
				</Button>
			</div>

			<div className="mb-10">
				<Paper className="p-2">
					<DraggableList />
				</Paper>
			</div>
		</div>
	);
};

export default Events;
