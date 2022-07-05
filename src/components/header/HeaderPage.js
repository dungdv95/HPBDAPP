import React from "react";
import { IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, IonRow, IonSegment, IonSegmentButton, IonAvatar } from '@ionic/react';
import { logoFacebook, search, chatbubbleEllipses, home, peopleOutline, logoYoutube, notificationsOutline, listOutline, logoInstagram, logoSnapchat, imagesOutline } from 'ionicons/icons';
import style from "./HeaderPage.module.css"


function HeaderPage() {
    return (
        <IonHeader>
            <IonToolbar>
                <div style={{ display: 'flex' }}>
                    <div className={style.block_icon_custom}>
                        <IonIcon className={style.icon_custom} icon={logoFacebook} />
                    </div>
                    <div className={style.left_header_custom}>
                        <div className={style.searh_box_custom} style={{ marginRight: '15px' }}>
                            <strong>
                                <IonIcon className={style.search_icon_custom} icon={search} />
                            </strong>
                        </div>
                        <div className={style.searh_box_custom}>
                            <strong><IonIcon className={style.search_icon_custom} icon={chatbubbleEllipses} /></strong>
                        </div>
                    </div>
                </div>
                <IonSegment value="home">
                    <IonSegmentButton className={style.w_custom} value="home">
                        <IonIcon icon={home} />
                    </IonSegmentButton>
                    <IonSegmentButton className={style.w_custom} value="friend">
                        <IonIcon icon={peopleOutline} />
                    </IonSegmentButton>
                    <IonSegmentButton className={style.w_custom} value="watch">
                        <IonIcon icon={logoYoutube} />
                    </IonSegmentButton>
                    <IonSegmentButton className={style.w_custom} value="notify">
                        <IonIcon icon={notificationsOutline} />
                    </IonSegmentButton>
                    <IonSegmentButton className={style.w_custom} value="more">
                        <IonIcon icon={listOutline} />
                    </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
        </IonHeader>
    )
}
export default HeaderPage;