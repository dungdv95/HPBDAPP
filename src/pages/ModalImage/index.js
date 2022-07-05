import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { checkmarkCircle, heart } from "ionicons/icons";
import React from "react";
import style from './style.module.css'

function ModalImage(props) {
    const open = props.open
    const closeImage = props.closeImage
    const data = props.data
    // console.log(data);
    return (
        <IonModal isOpen={open}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle style={{padding:'unset'}}>
                        <IonRow className={style.align_center}>
                            <IonCol size={2}>
                                <IonAvatar className={style.card_avatar}>
                                    <img src={data.avata} />
                                </IonAvatar>
                            </IonCol>
                            <IonCol size={10}>
                                <div className={style.card_tick_blue}>
                                    <strong>{data.name}</strong><IonIcon className={style.icon_tick_custom} icon={checkmarkCircle} />
                                </div>
                                {/* <IonIcon className={style.card_icon_color} icon={heart} /> */}
                            </IonCol>
                        </IonRow>
                    </IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={closeImage}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className={style.modal_img_custom}>
                    <IonImg src={data.img} />
                </div>
            </IonContent>
        </IonModal>
    )
}
export default ModalImage;