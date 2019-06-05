import React from 'react';
import './Diagram.scss';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';


class Diagram extends React.Component {
    static propTypes = {
        history: PropTypes.object,
    };

    handleDiagramClick(navItem) {
        this.props.history.push(`/${navItem}`);
    }

    render() {
        return (
            <div className="Diagram">
                <svg className="diagram"
                    viewBox="-50 -50 1100 1100"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlSpace="preserve"
                    style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.41421"
                    }}
                >
                    <g
                        id="diagram alt"
                        transform="matrix(1,0,0,1,-1482.11,0) matrix(1,0,0,1,1482.11,0)"
                    >
                        <g>
                            <g
                                id="donut private orgs - public orgs - science"
                                transform="matrix(0,-1,1,0,-3.17448,1000)"
                            >
                                <g className="interactive" onClick={() => this.handleDiagramClick('public-organizations')} id="public orgs">
                                    <path
                                        d="M864 601c0-158.506-128.494-287-287-287a286.997 286.997 0 0 0-143.5 38.451l83.23 144.158A120.545 120.545 0 0 1 577 480.46c66.572 0 120.54 53.968 120.54 120.54H864z"
                                        style={{ fill: "url(#b)" }}
                                        id="background-publick organizations"
                                        transform="matrix(1.73663,-8.31795e-33,8.31795e-33,1.73663,-503.623,-542.127)"
                                    />
                                    <g
                                        id="public organizations"
                                        transform="matrix(1,-4.78971e-33,4.78971e-33,1,-134.809,-211.857)"
                                    >
                                        <text
                                            x="634.987px"
                                            y="313.759px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.99924,0.0389695,-0.0389695,0.99924,12.7094,-24.5068)"
                                        >
                                            P
                                        </text>
                                        <text
                                            x="662.267px"
                                            y="314.845px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.994722,0.102606,-0.102606,0.994722,35.8002,-66.2906)"
                                        >
                                            u
                                        </text>
                                        <text
                                            x="687.541px"
                                            y="317.421px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.985636,0.168883,-0.168883,0.985636,63.4828,-111.555)"
                                        >
                                            b
                                        </text>
                                        <text
                                            x="713.861px"
                                            y="322.108px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.976904,0.213679,-0.213679,0.976904,85.3153,-145.098)"
                                        >
                                            l
                                        </text>
                                        <text
                                            x="724.432px"
                                            y="324.425px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.9707,0.240294,-0.240294,0.9707,99.1834,-164.571)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="735.043px"
                                            y="326.906px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.95904,0.283271,-0.283271,0.95904,122.71,-194.826)"
                                        >
                                            c
                                        </text>
                                        <text
                                            x="769.284px"
                                            y="337.558px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.928943,0.370224,-0.370224,0.928943,179.635,-260.821)"
                                        >
                                            o
                                        </text>
                                        <text
                                            x="793.122px"
                                            y="347.176px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.906823,0.421512,-0.421512,0.906823,220.24,-301.961)"
                                        >
                                            r
                                        </text>
                                        <text
                                            x="808.197px"
                                            y="354.045px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.884617,0.466319,-0.466319,0.884617,258.35,-336.026)"
                                        >
                                            g
                                        </text>
                                        <text
                                            x="831.481px"
                                            y="366.407px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.853235,0.521526,-0.521526,0.853235,313.123,-379.863)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="852.215px"
                                            y="379.092px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.818408,0.574638,-0.574638,0.818408,372.597,-420.875)"
                                        >
                                            n
                                        </text>
                                        <text
                                            x="872.957px"
                                            y="393.868px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.791546,0.61111,-0.61111,0.791546,422.668,-451.369)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="881.688px"
                                            y="400.443px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.764336,0.644818,-0.644818,0.764336,465.996,-474.158)"
                                        >
                                            z
                                        </text>
                                        <text
                                            x="899.694px"
                                            y="415.649px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.72569,0.688022,-0.688022,0.72569,532.771,-504.992)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="917.25px"
                                            y="432.479px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.689643,0.72415,-0.72415,0.689643,597.855,-530.004)"
                                        >
                                            t
                                        </text>
                                        <text
                                            x="928.262px"
                                            y="444.119px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.664691,0.747118,-0.747118,0.664691,643.064,-544.605)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="935.62px"
                                            y="452.148px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.630007,0.77659,-0.77659,0.630007,697.307,-559.301)"
                                        >
                                            o
                                        </text>
                                        <text
                                            x="951.829px"
                                            y="472.156px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.579078,0.815272,-0.815272,0.579078,785.581,-577.259)"
                                        >
                                            n
                                        </text>
                                        <text
                                            x="966.578px"
                                            y="493.009px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.52858,0.848883,-0.848883,0.52858,874.171,-588.098)"
                                        >
                                            s
                                        </text>
                                    </g>
                                </g>
                                <g className="interactive" onClick={() => this.handleDiagramClick('science')}>
                                    <path
                                        d="M433.5 352.451C344.702 403.718 290 498.465 290 601s54.702 197.282 143.5 248.549l83.23-144.158c-37.295-21.533-60.27-61.326-60.27-104.391 0-43.065 22.975-82.858 60.27-104.391L433.5 352.451z"
                                        style={{ fill: "url(#c)" }}
                                        transform="matrix(1.73663,-8.31795e-33,8.31795e-33,1.73663,-503.623,-542.127)"
                                    />
                                    <g
                                        id="science"
                                        transform="matrix(1,-4.78971e-33,4.78971e-33,1,-191.174,-196.916)"
                                    >
                                        <text
                                            x="298.256px"
                                            y="616.527px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.171753,0.98514,-0.98514,-0.171753,956.848,428.594)"
                                        >
                                            S
                                        </text>
                                        <text
                                            x="293.607px"
                                            y="643.553px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.107467,0.994209,-0.994209,-0.107467,964.985,420.807)"
                                        >
                                            c
                                        </text>
                                        <text
                                            x="291.021px"
                                            y="669.429px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.0594907,0.998229,-0.998229,-0.0594907,976.578,418.748)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="290.172px"
                                            y="681.469px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.0117173,0.999931,-0.999931,-0.0117173,974.994,399.301)"
                                        >
                                            e
                                        </text>
                                        <text
                                            x="289.884px"
                                            y="706.583px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.0514605,0.998675,-0.998675,0.0514605,980.614,380.722)"
                                        >
                                            n
                                        </text>
                                        <text
                                            x="291.228px"
                                            y="732.086px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.113756,0.993509,-0.993509,0.113756,985.433,359.468)"
                                        >
                                            c
                                        </text>
                                        <text
                                            x="293.992px"
                                            y="756.234px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.17479,0.984606,-0.984606,0.17479,987.198,334.586)"
                                        >
                                            e
                                        </text>
                                    </g>
                                </g>
                                <g className="interactive" onClick={() => this.handleDiagramClick('private-organizations')} id="private orgs">
                                    <path
                                        d="M433.5 849.549A286.997 286.997 0 0 0 577 888c158.506 0 287-128.494 287-287H697.54c0 66.572-53.968 120.54-120.54 120.54-21.159 0-41.946-5.57-60.27-16.149L433.5 849.549z"
                                        style={{ fill: "url(#d)" }}
                                        id="background-private organizations"
                                        transform="matrix(1.73663,-8.31795e-33,8.31795e-33,1.73663,-503.623,-542.127)"
                                    />
                                    <g
                                        id="private organizations"
                                        transform="matrix(1,-4.78971e-33,4.78971e-33,1,-134.881,-99.4128)"
                                    >
                                        <text
                                            x="980.264px"
                                            y="799.831px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.52826,0.849083,-0.849083,-0.52826,2177.22,390.025)"
                                        >
                                            P
                                        </text>
                                        <text
                                            x="965.75px"
                                            y="822.945px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.574791,0.8183,-0.8183,-0.574791,2194.27,505.695)"
                                        >
                                            r
                                        </text>
                                        <text
                                            x="956.199px"
                                            y="836.482px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.600397,0.799702,-0.799702,-0.600397,2199.23,574.028)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="949.803px"
                                            y="845.23px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.634635,0.772812,-0.772812,-0.634635,2205.78,647.623)"
                                        >
                                            v
                                        </text>
                                        <text
                                            x="934.863px"
                                            y="863.413px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.677951,0.735107,-0.735107,-0.677951,2203.36,761.541)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="918.272px"
                                            y="881.206px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.714575,0.699559,-0.699559,-0.714575,2190.9,868.508)"
                                        >
                                            t
                                        </text>
                                        <text
                                            x="907.025px"
                                            y="892.364px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.749345,0.66218,-0.66218,-0.749345,2177.61,960.438)"
                                        >
                                            e
                                        </text>
                                        <text
                                            x="879.261px"
                                            y="916.189px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.806946,0.590625,-0.590625,-0.806946,2129.9,1136.19)"
                                        >
                                            o
                                        </text>
                                        <text
                                            x="858.406px"
                                            y="931.315px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.838481,0.544931,-0.544931,-0.838481,2085.67,1244.43)"
                                        >
                                            r
                                        </text>
                                        <text
                                            x="845.306px"
                                            y="939.997px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.863492,0.504363,-0.504363,-0.863492,2049.32,1325.34)"
                                        >
                                            g
                                        </text>
                                        <text
                                            x="822.536px"
                                            y="953.209px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.893736,0.448593,-0.448593,-0.893736,1985.27,1436.14)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="800.743px"
                                            y="964.134px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.920631,0.390434,-0.390434,-0.920631,1914.36,1539.11)"
                                        >
                                            n
                                        </text>
                                        <text
                                            x="777.184px"
                                            y="973.934px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.937569,0.3478,-0.3478,-0.937569,1844.58,1616.76)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="767.074px"
                                            y="977.826px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.95184,0.306594,-0.306594,-0.95184,1797,1673.38)"
                                        >
                                            z
                                        </text>
                                        <text
                                            x="744.614px"
                                            y="985.048px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.968216,0.250116,-0.250116,-0.968216,1711.94,1752.55)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="721.009px"
                                            y="991.005px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.979855,0.199708,-0.199708,-0.979855,1625.41,1818.05)"
                                        >
                                            t
                                        </text>
                                        <text
                                            x="705.277px"
                                            y="994.156px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.986129,0.16598,-0.16598,-0.986129,1565.78,1857.46)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="694.553px"
                                            y="996.123px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.992698,0.120628,-0.120628,-0.992698,1504.19,1901.19)"
                                        >
                                            o
                                        </text>
                                        <text
                                            x="669.026px"
                                            y="999.208px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.998366,0.0571395,-0.0571395,-0.998366,1394.05,1958.56)"
                                        >
                                            n
                                        </text>
                                        <text
                                            x="643.564px"
                                            y="1000.62px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.999997,-0.0025704,0.0025704,-0.999997,1284.55,2002.88)"
                                        >
                                            s
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g className="interactive" onClick={() => this.handleDiagramClick('local-community')}
                                id="area local community"
                                transform="matrix(0.339659,-0.940549,0.940549,0.339659,-138.121,800.362)"
                            >
                                <g
                                    id="background-local community"
                                    transform="matrix(1.18598,0.13406,0.13406,-1.18598,-1268.76,1742.64)"
                                >
                                    <path
                                        d="M1346.38 1461.01l36.31-.01 76.8-2.05v29.17h3.34v-30.57l104.59-41.05 52.88-64.36 36.76 16.64 2.33-6.99-36.15-16.89 31.23-80.48c26.6 19.63 39.94 29.06 40.01 28.28.07-.77 1.08-2.96 3.03-6.55l-40.45-30.04 2.33-24.77 23.16-25.16-5.69-9.59-19.8 21.87-61.32-127.55 24.56-16.64-1.89-5.71-25.99 16.69-54.33-112.595-27.31-25.451-96.31-30.548-37.72-3.896 5.93-24.117h-11.03l-6.52 23.8-102.72 18.643-63.06 32.652-11.72-32.651c-3.96 3.221-6.25 5.203-6.89 5.945-.63.742 2.83 11.907 10.39 33.496l-13.5 15.802-33.67-7.093c-3.55 1.674-3.55 3.314 0 4.922 3.56 1.608 13.47 4.451 29.74 8.532l-46.44 98.219-54.03 108.63-29.28-7.64-2.74 8.44 32.87 7.27-2.05 68.18v57.71l-24.51 1.95v9.36h28.89l42.4 74.63-20 24.88 6.4 5.09 19.91-23.08 6.45 3.54-16.39 25.46 6.16 4.13 18.07-25.3 46.14 25.3 75.58 26.33v23.3h4.49v-23.3h18.45l14.37 31.58 8.37-3.66-13.29-30.07 41.31-23.15 17.81 36.32 8.7-4.18-14.96-31.62z"
                                        style={{ fill: "rgb(212,221,194)" }}
                                    />
                                    <path
                                        d="M1659.39 1361.79l-36.15-16.89 31.23-80.48 2.45 1.81 2.38 1.75 2.3 1.69 2.22 1.63 2.15 1.57 2.06 1.51 1.99 1.46.97.7.94.69.93.67.91.66.88.64.87.63.85.62.83.6.81.58.79.57.77.55.75.54.74.53.71.5.69.5.68.48.65.46.63.45.62.44.6.42.57.4.56.39.54.38.52.36.5.34.48.33.46.31.44.3.42.29.4.27.38.25.36.24.35.23.32.21.31.2.28.18.27.16.12.08.12.07.12.07.11.07.11.06.1.06.09.05.1.05.08.05.08.05.08.04.07.03.07.03.06.03.06.03.05.02.05.02.04.01.04.01h.02l.01.01H1694.44l.01-.01h.01l.01-.01h.01v-.03l.01-.03v-.04l.01-.04.01-.05.01-.04.01-.05.01-.05.01-.05.02-.06.02-.05.01-.06.02-.06.02-.06.02-.07.05-.13.06-.14.05-.15.07-.17.07-.16.07-.18.08-.18.09-.2.09-.2.1-.2.1-.22.11-.23.11-.23.12-.24.13-.25.13-.26.13-.27.15-.27.14-.29.15-.29.16-.3.16-.31.17-.31.18-.33.18-.33-40.45-30.04 2.33-24.77 23.16-25.16-5.69-9.59-19.8 21.87-61.32-127.55 24.56-16.64-1.89-5.71-25.99 16.69-54.33-112.595-27.31-25.451-96.31-30.548-37.72-3.896 5.93-24.117h-11.03l-6.52 23.8-102.72 18.643-63.06 32.652-11.72-32.651-.72.589-.68.561-.65.531-.61.502-.28.241-.28.233-.27.226-.26.218-.25.211-.24.204-.23.197-.22.189-.21.183-.2.175-.19.167-.18.161-.17.153-.17.146-.15.138-.14.131-.13.124-.12.117-.12.11-.1.102-.1.095-.08.088-.07.08-.04.038-.03.035v.01l-.01.01-.01.011v.012l-.01.013-.01.014v.031l-.01.034-.01.038v.043l-.01.046v.222l.01.065v.069l.01.073.01.076.01.081.01.084.01.088.02.092.01.095.02.1.02.103.02.107.02.111.02.115.03.118.02.123.03.126.03.13.07.271.07.287.07.302.08.317.09.333.09.347.1.363.11.379.11.393.12.409.12.424.13.44.13.454.14.47.15.485.16.501.16.516.16.531.17.546.18.561.18.577.19.592.2.608.2.622.21.638.21.653.22.669.23.683.23.699.23.714.25.73.25.745.25.76.26.775.27.791.27.805.28.821.29.837.29.852.3.866.3.883.31.897.32.913.32.928.33.943.33.959.34.973.69 1.994-13.5 15.802-33.67-7.093-.16.078-.16.078-.15.079-.15.078-.14.078-.07.039-.07.04-.07.039-.07.039-.06.039-.06.039-.06.039-.07.039-.05.039-.06.039-.06.039-.05.039-.06.039-.05.039-.05.039-.05.039-.05.038-.05.039-.04.039-.05.039-.04.039-.05.039-.04.039-.04.038-.03.039-.04.039-.04.039-.03.039-.04.038-.03.039-.03.039-.03.039-.02.038-.03.039-.03.039-.02.038-.02.039-.03.039-.02.038-.01.039-.02.039-.02.038-.01.039-.02.038-.01.039-.01.039-.01.038-.01.039v.038l-.01.039v.038l-.01.039v.153l.01.039v.038l.01.039v.038l.01.038.01.039.01.038.01.039.02.038.01.038.02.038.02.039.01.038.02.038.03.039.02.038.02.038.03.038.03.038.02.039.03.038.03.038.03.038.04.038.03.038.04.038.04.039.03.038.04.038.04.038.05.038.04.038.05.038.04.038.05.038.05.038.05.038.05.038.05.038.06.038.05.038.06.038.06.038.06.038.06.037.06.038.06.038.06.038.07.038.07.038.07.037.07.038.14.076.15.075.15.076.16.075.16.076.17.076.19.078.19.08.19.082.21.083.22.085.23.088.23.089.25.09.26.093.26.094.27.097.29.098.29.099.3.102.31.103.32.106.33.107.34.109.35.11.36.113.36.114.38.116.38.118.4.12.4.121.42.124.42.125.43.127.44.129.45.13.46.133.47.134.48.136.49.138.5.139.5.142.52.143.52.145.54.147.54.149.55.15.57.153.57.154.58.156.59.157.6.16.61.161 1.25.329 1.28.335 1.32.343 1.36.35 1.39.357 1.44.365 1.46.371 1.51.379-46.44 98.219-54.03 108.63-29.28-7.64-2.74 8.44 32.87 7.27-2.05 68.18v57.71l-24.51 1.95v9.36h28.89l42.4 74.63-20 24.88 6.4 5.09 19.91-23.08 6.45 3.54-16.39 25.46 6.16 4.13 18.07-25.3 46.14 25.3 75.58 26.33v23.3h4.49v-23.3h18.45l14.37 31.58 8.37-3.66-13.29-30.07 41.31-23.15 17.81 36.32 8.7-4.18-14.96-31.62 36.31-.01 76.8-2.05v29.17h3.34v-30.57l104.59-41.05 52.88-64.36 36.76 16.64 2.33-6.99zm-95.53 49.81l-105.81 41.52-75.44 2.02h-36.23l-4.31 6.8-1.98-4.03-8.13-2.53-44.06 24.68-.06-.13h-22.22l-.9.9-76.78-26.75-50.28-27.56-2.08 2.91-1.19-4.71-8.54-4.67.03-.04-46.06-81.07h-2.3l.37-.03v-63.03l2.2-72.95-1.8-.4 54.25-109.06 46.46-98.272-1.35-2.871 2.18.46 17.95-21.012-1.8-5.174-.02-.045 6.08 2.39 62.28-32.246 105.5-19.146 1.56-5.728 4.77 6.768 37.12 3.834 94.48 29.967 25.54 23.801 53.85 111.604 1.93.55-.81.54 63.51 132.11 8.09 1.17-6.12 6.65-2.83 30.03 2.8 2.08-4.71 1.37-33.21 85.59.3.14-52.23 63.57z"
                                        style={{ fill: "rgb(221,136,23)" }}
                                    />
                                </g>
                                <g
                                    id="local community"
                                    transform="matrix(-0.424893,0.905243,-0.905243,-0.424893,1442.23,75.9725)"
                                >
                                    <text
                                        x="502.586px"
                                        y="622.281px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.219051,-0.975713,0.975713,0.219051,-214.674,976.35)"
                                    >
                                        L
                                    </text>
                                    <text
                                        x="507.821px"
                                        y="598.748px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.301308,-0.953527,0.953527,0.301308,-216.112,902.561)"
                                    >
                                        o
                                    </text>
                                    <text
                                        x="515.635px"
                                        y="574.183px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.384492,-0.923129,0.923129,0.384492,-212.667,829.412)"
                                    >
                                        c
                                    </text>
                                    <text
                                        x="524.979px"
                                        y="551.834px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.459799,-0.888023,0.888023,0.459799,-206.448,764.295)"
                                    >
                                        a
                                    </text>
                                    <text
                                        x="536.393px"
                                        y="530.321px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.515248,-0.857041,0.857041,0.515248,-194.489,716.784)"
                                    >
                                        l
                                    </text>
                                    <text
                                        x="548.205px"
                                        y="511.194px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.5999,-0.800075,0.800075,0.5999,-189.657,643.134)"
                                    >
                                        c
                                    </text>
                                    <text
                                        x="562.75px"
                                        y="491.768px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.666815,-0.745223,0.745223,0.666815,-178.977,583.224)"
                                    >
                                        o
                                    </text>
                                    <text
                                        x="579.692px"
                                        y="472.383px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.744477,-0.667648,0.667648,0.744477,-167.261,507.735)"
                                    >
                                        m
                                    </text>
                                    <text
                                        x="607.714px"
                                        y="447.292px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.825156,-0.564905,0.564905,0.825156,-146.423,421.507)"
                                    >
                                        m
                                    </text>
                                    <text
                                        x="638.858px"
                                        y="426.398px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.882111,-0.471041,0.471041,0.882111,-125.537,351.196)"
                                    >
                                        u
                                    </text>
                                    <text
                                        x="661.289px"
                                        y="414.439px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.92068,-0.390317,0.390317,0.92068,-109.309,290.986)"
                                    >
                                        n
                                    </text>
                                    <text
                                        x="684.83px"
                                        y="404.725px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.943755,-0.330645,0.330645,0.943755,-95.302,249.199)"
                                    >
                                        i
                                    </text>
                                    <text
                                        x="695.081px"
                                        y="401.083px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.958195,-0.286117,0.286117,0.958195,-85.6985,215.642)"
                                    >
                                        t
                                    </text>
                                    <text
                                        x="710.442px"
                                        y="396.366px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 42
                                        }}
                                        transform="matrix(0.976225,-0.216762,0.216762,0.976225,-69.0258,163.42)"
                                    >
                                        y
                                    </text>
                                </g>
                            </g>
                            <g
                                id="donut heat-water-electricity-food"
                                transform="matrix(0.707107,0.707107,-0.707107,0.707107,500,-207.107)"
                            >
                                <g className="interactive" onClick={() => this.handleDiagramClick('water')}
                                   id="water">
                                    <path
                                        d="M500 273.737a42 42 0 0 0-49.581-41.31c-110.514 20.35-197.642 107.478-217.99 217.992A42 42 0 0 0 273.737 500l111.99.001c0-63.11 51.162-114.273 114.273-114.273v-111.99z"
                                        style={{ fill: "rgb(126,169,203)" }}
                                    />
                                    <g
                                        transform="matrix(1.19434e-15,-1,1,1.19434e-15,-86.0781,1077)"
                                    >
                                        <text
                                            x="667.183px"
                                            y="414.325px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.839811,0.54288,-0.54288,0.839811,331.804,-295.829)"
                                        >
                                            w
                                        </text>
                                        <text
                                            x="696.429px"
                                            y="433.805px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.748727,0.662878,-0.662878,0.748727,462.554,-352.644)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="714.444px"
                                            y="450.122px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.674794,0.738006,-0.738006,0.674794,564.534,-380.881)"
                                        >
                                            t
                                        </text>
                                        <text
                                            x="725.444px"
                                            y="461.842px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.592285,0.805728,-0.805728,0.592285,667.893,-396.211)"
                                        >
                                            e
                                        </text>
                                        <text
                                            x="740.15px"
                                            y="482.195px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.497497,0.867466,-0.867466,0.497497,790.215,-399.75)"
                                        >
                                            r
                                        </text>
                                    </g>
                                </g>
                                <g className="interactive" onClick={() => this.handleDiagramClick('electricity')}>
                                    <path
                                        d="M726.262 500a42 42 0 0 0 41.31-49.581c-20.35-110.514-107.478-197.642-217.991-217.99A42 42 0 0 0 500 273.737L500 385.727c63.11 0 114.273 51.162 114.273 114.273h111.99z"
                                        style={{ fill: "rgb(211,172,113)" }}
                                    />
                                    <g
                                        transform="matrix(1,0,0,1,-77,-86.0781)"
                                    >
                                        <text
                                            x="626.413px"
                                            y="398.87px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.94871,0.316148,-0.316148,0.94871,158.231,-177.581)"
                                        >
                                            e
                                        </text>
                                        <text
                                            x="650.107px"
                                            y="407.139px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.914935,0.403601,-0.403601,0.914935,219.623,-227.751)"
                                        >
                                            l
                                        </text>
                                        <text
                                            x="660.226px"
                                            y="411.263px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.873237,0.487295,-0.487295,0.873237,284.099,-269.592)"
                                        >
                                            e
                                        </text>
                                        <text
                                            x="682.106px"
                                            y="423.529px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.803951,0.594696,-0.594696,0.803951,385.597,-322.613)"
                                        >
                                            c
                                        </text>
                                        <text
                                            x="701.508px"
                                            y="438.178px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.73876,0.673969,-0.673969,0.73876,478.58,-358.324)"
                                        >
                                            t
                                        </text>
                                        <text
                                            x="713.391px"
                                            y="448.976px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.675069,0.737754,-0.737754,0.675069,563.036,-380.421)"
                                        >
                                            r
                                        </text>
                                        <text
                                            x="724.518px"
                                            y="461.241px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.625501,0.780224,-0.780224,0.625501,631.203,-392.551)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="731.563px"
                                            y="469.565px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.552002,0.833843,-0.833843,0.552002,719.282,-399.644)"
                                        >
                                            c
                                        </text>
                                        <text
                                            x="744.683px"
                                            y="489.955px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.474348,0.880338,-0.880338,0.474348,822.77,-398.026)"
                                        >
                                            i
                                        </text>
                                        <text
                                            x="749.896px"
                                            y="499.483px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.412668,0.910881,-0.910881,0.412668,895.408,-389.704)"
                                        >
                                            t
                                        </text>
                                        <text
                                            x="756.71px"
                                            y="514.078px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.313947,0.94944,-0.94944,0.313947,1007.23,-365.766)"
                                        >
                                            y
                                        </text>
                                    </g>
                                </g>
                                <g className="interactive" onClick={() => this.handleDiagramClick('food')}>
                                    <path
                                        d="M499.998 726.262a42 42 0 0 0 49.58 41.31c110.514-20.35 197.643-107.478 217.991-217.991A42 42 0 0 0 726.261 500L614.27 500c0 63.11-51.162 114.273-114.273 114.273v111.99z"
                                        style={{ fill: "rgb(123,199,108)" }}
                                    />
                                    <g

                                        transform="matrix(6.12323e-17,1,-1,6.12323e-17,1086.08,-77)"
                                    >
                                        <text
                                            x="741.96px"
                                            y="485.186px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.557315,-0.830301,0.830301,-0.557315,752.616,1371.64)"
                                        >
                                            f
                                        </text>
                                        <text
                                            x="733.26px"
                                            y="471.781px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.642248,-0.766497,0.766497,-0.642248,842.576,1336.82)"
                                        >
                                            o
                                        </text>
                                        <text
                                            x="716.699px"
                                            y="452.063px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.737754,-0.675069,0.675069,-0.737754,940.273,1269.4)"
                                        >
                                            o
                                        </text>
                                        <text
                                            x="697.679px"
                                            y="434.714px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(-0.819913,-0.572488,0.572488,-0.819913,1020.85,1190.55)"
                                        >
                                            d
                                        </text>
                                    </g>
                                </g>
                                <g className="interactive" onClick={() => this.handleDiagramClick('heat')}>
                                    <path
                                        d="M273.737 499.998a42 42 0 0 0-41.31 49.58c20.35 110.514 107.478 197.643 217.992 217.991A42 42 0 0 0 500 726.261L500 614.27c-63.11 0-114.273-51.162-114.273-114.273h-111.99z"
                                        style={{ fill: "rgb(219,122,113)" }}
                                    />
                                    <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,1077,1086.08)">
                                        <text
                                            x="678.328px"
                                            y="421.094px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.815598,0.57862,-0.57862,0.815598,368.738,-314.843)"
                                        >
                                            h
                                        </text>
                                        <text
                                            x="699.284px"
                                            y="436.021px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.733209,0.680003,-0.680003,0.733209,483.058,-359.189)"
                                        >
                                            e
                                        </text>
                                        <text
                                            x="717.635px"
                                            y="453.154px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.643106,0.765778,-0.765778,0.643106,603.135,-387.821)"
                                        >
                                            a
                                        </text>
                                        <text
                                            x="733.077px"
                                            y="471.973px"
                                            style={{
                                                fontFamily: '"Inter-Medium", "Inter"',
                                                fontWeight: 500,
                                                fontSize: 42
                                            }}
                                            transform="matrix(0.558562,0.829463,-0.829463,0.558562,715.092,-399.714)"
                                        >
                                            t
                                        </text>
                                    </g>
                                </g>
                                <g
                                    id="circular arrow"
                                    transform="matrix(0.707107,-0.707107,0.707107,0.707107,-207.523,500.416)"
                                >
                                    <path
                                        d="M373.6 506.105h-10.55c2.31 46.837 29.67 91.359 70.89 114.248 20.29 11.269 43.59 17.207 66.76 17.243v3c-35.56-.055-70.96-14.089-96.82-38.609-26.12-24.756-42.1-59.63-43.83-95.882h-10.87l12.21-12.21 12.21 12.21zm264.76-12.21c-1.44-31.482-14.01-62.768-35.4-86.437-25.79-28.543-63.79-45.416-102.26-45.476v-3l.45.001c48.33.23 95.66 27.004 120.61 68.906 11.85 19.898 18.6 42.718 19.61 66.006H652l-12.21 12.21-12.22-12.21h10.79z"
                                        style={{ fillRule: "nonzero" }}
                                    />
                                    <path
                                        d="M493.89 359.164v-10.572l12.22 12.21-12.22 12.211V362.17c-45.39 2.438-88.67 28.34-111.89 67.611-12.48 21.093-19.06 45.661-19.11 70.011l-3-.006c.06-31.641 11.06-63.203 30.84-87.903 24.93-31.136 63.39-50.651 103.16-52.719zm13.9 278.227c45.72-2.567 89.6-29.039 112.65-69.393 11.8-20.643 18.03-44.529 18.07-68.211l3 .004c-.05 30.564-10.27 60.97-28.76 85.237-24.72 32.448-63.88 53.161-104.96 55.372v11.008l-12.21-12.21 12.21-12.211v10.404z"
                                        style={{ fillRule: "nonzero" }}
                                    />
                                </g>
                            </g>
                            <g className="interactive" onClick={() => this.handleDiagramClick('p2p-production')}
                                id="core P2P-production"
                               transform="matrix(1.06512,0,0,1.06512,-32.5581,-32.5581)"
                            >
                                <ellipse
                                    cx="499.194"
                                    cy="499.5"
                                    rx="0.781"
                                    ry="112.5"
                                    style={{ fill: "rgb(243,243,243)" }}
                                    transform="matrix(137.615,0,0,0.955556,-68196.5,22.7)"
                                />
                                <g transform="matrix(1,0,0,1,1.09167,-7.32404)">
                                    <text
                                        x="464.324px"
                                        y="501.462px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 36
                                        }}
                                    >
                                        P<tspan x="487.695px 510.133px " y="501.462px 501.462px ">
                                        2P
                                    </tspan>
                                    </text>
                                    <text
                                        x="402.902px"
                                        y="537.462px"
                                        style={{
                                            fontFamily: '"Inter-Medium", "Inter"',
                                            fontWeight: 500,
                                            fontSize: 36
                                        }}
                                    >
                                        P<tspan
                                        x="426.273px 440.465px 462.507px 485.393px 507.153px 527.955px 541.7px 551.022px 573.064px "
                                        y="537.462px 537.462px 537.462px 537.462px 537.462px 537.462px 537.462px 537.462px 537.462px "
                                    >
                                        roduction
                                    </tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <radialGradient
                            id="b"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(-1.37027e-30,286.086,-286.086,-1.37027e-30,577.914,600.086)"
                        >
                            <stop
                                offset={0}
                                style={{ stopColor: "white", stopOpacity: 0 }}
                            />
                            <stop
                                offset="0.64"
                                style={{
                                    stopColor: "rgb(255,241,217)",
                                    stopOpacity: "0.14902"
                                }}
                            />
                            <stop
                                offset="0.84"
                                style={{
                                    stopColor: "rgb(255,205,117)",
                                    stopOpacity: "0.541176"
                                }}
                            />
                            <stop
                                offset={1}
                                style={{ stopColor: "rgb(255,162,0)", stopOpacity: 1 }}
                            />
                        </radialGradient>
                        <radialGradient
                            id="c"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(-1.37027e-30,286.086,-286.086,-1.37027e-30,577.914,600.086)"
                        >
                            <stop
                                offset={0}
                                style={{ stopColor: "white", stopOpacity: 0 }}
                            />
                            <stop
                                offset="0.64"
                                style={{
                                    stopColor: "rgb(217,249,255)",
                                    stopOpacity: "0.14902"
                                }}
                            />
                            <stop
                                offset="0.84"
                                style={{
                                    stopColor: "rgb(117,233,255)",
                                    stopOpacity: "0.541176"
                                }}
                            />
                            <stop
                                offset={1}
                                style={{ stopColor: "rgb(0,214,255)", stopOpacity: 1 }}
                            />
                        </radialGradient>
                        <radialGradient
                            id="d"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(-1.37027e-30,286.086,-286.086,-1.37027e-30,577.914,600.086)"
                        >
                            <stop
                                offset={0}
                                style={{ stopColor: "white", stopOpacity: 0 }}
                            />
                            <stop
                                offset="0.64"
                                style={{
                                    stopColor: "rgb(255,236,253)",
                                    stopOpacity: "0.14902"
                                }}
                            />
                            <stop
                                offset="0.84"
                                style={{
                                    stopColor: "rgb(255,186,249)",
                                    stopOpacity: "0.541176"
                                }}
                            />
                            <stop
                                offset={1}
                                style={{ stopColor: "rgb(255,128,244)", stopOpacity: 1 }}
                            />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        );
    }
}

export default withRouter(Diagram);
