import { useState } from 'react'
import Button from '../../Components/Button/Button'
import DragAndDropInput from '../../Components/DragAndDropInput/DragAndDropInput'
import AcceptedModal from '../../Components/Modals/AcceptedModal/AcceptedModal'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import DeleteModalBody from '../CreatingCourseModulePageContainer/DeleteModalBody'
import DiscardModalBody from '../CreatingCourseModulePageContainer/DiscardModalBody'
import classes from './CourseVideo.module.css'
import Toast from '../../Components/Toast/Toast'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import VideoUpload from "../../Assets/Images/CourseVideo-video-upload.png";

const VideoUploadComponent = () => {

    // States
    const [displayDiscardModal, setDisplayDiscardModal] =
        useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
    const [saveLessonAndContinue, setSaveLessonAndContinue] = useState(1);
    const [showToast, setShowToast] = useState(false);

    return (
        <>
            {displayDiscardModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayDiscardModal(false);
                    }}
                    body={
                        <DiscardModalBody
                            onClick={() => {
                                setDisplayDiscardModal(false);
                            }}
                            onClick2={() => {
                                setDisplayDiscardModal(false);
                                setSaveLessonAndContinue(prevValue => (prevValue > 1) ? prevValue - 1 : prevValue);
                            }}
                        />
                    }
                />
            )}
            {displayDeleteModal && (
                <AcceptedModal
                    onClick={() => {
                        setDisplayDeleteModal(false);
                    }}
                    body={
                        <DeleteModalBody
                            onClick={() => {
                                setDisplayDeleteModal(false);
                            }}
                        />
                    }
                />
            )}
            <div className={classes.bulkUpload}>
                <ul>
                    <li>We suggest a max video size of 200MB and not more than 15 minutes.</li>
                    <li>You can compressing your video using HandBrake.</li>
                    <li>It’s all about the details- pick your thumbnail image and add closed captions.</li>
                </ul>
                {saveLessonAndContinue === 1 && (
                    <>
                        <DragAndDropInput
                            acceptedFileTypes=".mov, .movie, .mp4, .mpeg, .vivo, .webm, .m4v"
                        />
                        <p className={classes.info}>You can upload files with the extensions: mov, movie, mp4, mpeg, vivo, webm, m4v</p>
                    </>
                )}
                {saveLessonAndContinue === 2 && (
                    <div className={classes.fileUpload}>
                        <div className={classes.fileHeader}>
                            <h3>Video Upload</h3>
                        </div>
                        <div className={classes.file}>
                            <div>
                                <p>First video.mp4</p>
                                <ProgressBar primaryColor='#fffaeb' secondaryColor='#ffd029' percentage={15} color="#fff" />
                                <span>Uploading({15}%)</span>
                            </div>
                            <Button
                                type='secondary'
                                onClick={() => setSaveLessonAndContinue(saveLessonAndContinue - 1)}
                            >Cancel</Button>
                        </div>
                    </div>
                )}
                {saveLessonAndContinue === 3 && (
                    <>
                        <div className={classes.fileUpload}>
                            <div className={classes.fileHeader}>
                                <h3>Video Uploaded</h3>
                            </div>
                            <div className={classes.file}>
                                <div>
                                    <p>First video.mp4 (processing)</p>
                                </div>
                                <svg
                                    onClick={() => {
                                        setDisplayDeleteModal(true);
                                    }}
                                    width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <p className={classes.videoInfo}>Your video has uploaded. The video preview is processing and will be available shortly</p>
                    </>

                )}
                {(saveLessonAndContinue === 4 || saveLessonAndContinue === 5 || saveLessonAndContinue === 6) && (
                    <>
                        <div className={classes.fileUpload}>
                            <div className={classes.fileHeader}>
                                <h3>Video Uploaded</h3>
                                <svg
                                    onClick={() => {
                                        setDisplayDeleteModal(true);
                                    }}
                                    width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={classes.videoUploaded}>
                                <VideoPlayer height="200px" url="/" thumbnail={VideoUpload} />
                                {(saveLessonAndContinue === 4 && saveLessonAndContinue === 4) && <Button onClick={() => setSaveLessonAndContinue(5)}>Generate transcript</Button>}
                            </div>
                        </div>
                        {(saveLessonAndContinue === 5 || saveLessonAndContinue === 6) && (
                            <div className={classes.transcript}>
                                <div className={classes.transcriptHeader}>
                                    <h3>Video transcript</h3>
                                    <svg
                                        onClick={() => {
                                            setDisplayDeleteModal(true);
                                        }}
                                        width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h1>Text Editor</h1>
                            </div>
                        )}
                        <div className={classes.thumbnail}>
                            <h4>Thumbnail (optional)</h4>
                            <label htmlFor="thumbnail">
                                <input type="file" name="thumbnail-img" id="thumbnail" />
                                <span>+ Add video thumbnail</span>
                            </label>
                            <span>Thumbnail should be  1280x720 pixels, under 2MB (JPG or PNG)</span>
                        </div>
                    </>
                )}
            </div>
            {(saveLessonAndContinue === 6 && showToast) && (
                <Toast
                    onClick={() => setShowToast(false)}
                    toastMessage="Lesson successfully saved!"
                />
            )}

            <div className={`${classes.addLesson} ${classes.buttonContainer}`}>
                <Button
                    onClick={() => {
                        setSaveLessonAndContinue(prevValue => (prevValue < 7) ? prevValue + 1 : prevValue);
                        setShowToast(true);
                    }}
                    className={saveLessonAndContinue === 6 ? classes.inactivePrimary : ''}
                >
                    <span>Save lesson</span>
                </Button>
                <Button
                    type='secondary'
                    onClick={() => {
                        setDisplayDiscardModal(true);
                    }}
                    className={saveLessonAndContinue === 6 ? classes.inactiveSecondary : ''}
                >
                    <span>Discard changes</span>
                </Button>
                <Button
                    onClick={() => {
                        setDisplayDeleteModal(true);
                    }}
                >
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 7L18.6327 19.1425C18.5579 20.1891 17.687 21 16.6378 21H8.36224C7.31296 21 6.44208 20.1891 6.36732 19.1425L5.5 7M10.5 11V17M14.5 11V17M15.5 7V4C15.5 3.44772 15.0523 3 14.5 3H10.5C9.94772 3 9.5 3.44772 9.5 4V7M4.5 7H20.5" stroke="#DC362E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Delete lesson</span>
                </Button>
            </div>
        </>
    )
}

export default VideoUploadComponent