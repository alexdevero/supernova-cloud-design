// Imports
import * as React from 'react'

type SettingsDevicesProps = {}

export class SettingsDevices extends React.PureComponent<SettingsDevicesProps, {}> {
    // Render the app
    render() {
        return (
            <div className="page__content page__content--vertical">
                <h2 className="h3">Devices</h2>

                <p className="form__note mb-2">List of devices connected with your account. You can register up to 2 devices for one account. When unlinked, Supernova will log you out from the unlinked device immediately.</p>

                <div className="table table--gray">
                    <div className="table__row">
                        <div className="table__cell col-md-7 col-lg-8">
                            <p className="table__cell-title">Jiri's Mac, SN: 3*********DFED</p>
                        </div>

                        <div className="table__cell col-md-5 col-lg-4 align-items-start align-items-md-end mt-md-down-half">
                            <a className="link--blue" href="#">Unlink Jiri's Mac</a>
                        </div>
                    </div>

                    <div className="table__row">
                        <div className="table__cell col-md-7 col-lg-8">
                            <p className="table__cell-title">Jiri's Mac 2, SN: 3*********DFED</p>
                        </div>

                        <div className="table__cell col-md-5 col-lg-4 align-items-start align-items-md-end mt-md-down-half">
                            <a className="link--blue" href="#">Unlink Jiri’s Mac 2</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
