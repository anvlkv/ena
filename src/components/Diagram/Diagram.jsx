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
                <svg width="100%"
                    height="100%"
                    viewBox="-10 -10 1020 1030"
                    xmlSpace="preserve"
                    style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        strokeLinejoin: 'round',
                        strokeMiterlimit: 1.41421,
                    }}
                >
                    <rect
                        id="diagram-alt"
                        x={0}
                        y={0}
                        width={1000}
                        height={1000}
                        style={{
                            fill: 'none',
                        }}
                    />
                    <clipPath id="_clip1">
                        <rect x={0} y={0} width={1000} height={1000} />
                    </clipPath>
                    <g>
                        <g
                            id="donut-private-orgs---public-orgs---science"
                        >
                            <g id="public-orgs"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('quintuple-helix-collaboration')}>
                                <path
                                    id="background-publick-organizations"
                                    d="M498.413,3.174c-275.266,0 -498.413,223.147 -498.413,498.413c0,87.49 23.03,173.438 66.775,249.207l250.35,-144.54c-18.373,-31.823 -28.046,-67.921 -28.046,-104.667c0,-115.611 93.722,-209.333 209.334,-209.333l0,-289.08Z"
                                    style={{
                                        fill: 'url(#_Radial2)',
                                    }}
                                />
                                <g
                                    id="public-organizations"
                                    transform="matrix(-4.78971e-33,-1,1,-4.78971e-33,-215.031,1134.81)"
                                >
                                    <g transform="matrix(0.99924,0.0389695,-0.0389695,0.99924,12.7094,-24.5068)">
                                        <text
                                            x="634.987px"
                                            y="313.759px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'P'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.994722,0.102606,-0.102606,0.994722,35.8002,-66.2906)">
                                        <text
                                            x="662.267px"
                                            y="314.845px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'u'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.985636,0.168883,-0.168883,0.985636,63.4828,-111.555)">
                                        <text
                                            x="687.541px"
                                            y="317.421px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'b'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.976904,0.213679,-0.213679,0.976904,85.3153,-145.098)">
                                        <text
                                            x="713.861px"
                                            y="322.108px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'l'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.9707,0.240294,-0.240294,0.9707,99.1834,-164.571)">
                                        <text
                                            x="724.432px"
                                            y="324.425px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.95904,0.283271,-0.283271,0.95904,122.71,-194.826)">
                                        <text
                                            x="735.043px"
                                            y="326.906px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'c'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.928943,0.370224,-0.370224,0.928943,179.635,-260.821)">
                                        <text
                                            x="769.284px"
                                            y="337.558px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'o'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.906823,0.421512,-0.421512,0.906823,220.24,-301.961)">
                                        <text
                                            x="793.122px"
                                            y="347.176px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'r'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.884617,0.466319,-0.466319,0.884617,258.35,-336.026)">
                                        <text
                                            x="808.197px"
                                            y="354.045px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'g'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.853235,0.521526,-0.521526,0.853235,313.123,-379.863)">
                                        <text
                                            x="831.481px"
                                            y="366.407px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.818408,0.574638,-0.574638,0.818408,372.597,-420.875)">
                                        <text
                                            x="852.215px"
                                            y="379.092px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'n'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.791546,0.61111,-0.61111,0.791546,422.668,-451.369)">
                                        <text
                                            x="872.957px"
                                            y="393.868px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.764336,0.644818,-0.644818,0.764336,465.996,-474.158)">
                                        <text
                                            x="881.688px"
                                            y="400.443px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'z'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.72569,0.688022,-0.688022,0.72569,532.771,-504.992)">
                                        <text
                                            x="899.694px"
                                            y="415.649px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.689643,0.72415,-0.72415,0.689643,597.855,-530.004)">
                                        <text
                                            x="917.25px"
                                            y="432.479px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.664691,0.747118,-0.747118,0.664691,643.064,-544.605)">
                                        <text
                                            x="928.262px"
                                            y="444.119px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.630007,0.77659,-0.77659,0.630007,697.307,-559.301)">
                                        <text
                                            x="935.62px"
                                            y="452.148px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'o'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.579078,0.815272,-0.815272,0.579078,785.581,-577.259)">
                                        <text
                                            x="951.829px"
                                            y="472.156px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'n'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.52858,0.848883,-0.848883,0.52858,874.171,-588.098)">
                                        <text
                                            x="966.578px"
                                            y="493.009px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'s'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g id="science"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('quintuple-helix-collaboration')}>
                                <path
                                    id="background-science"
                                    d="M66.775,750.794c89.033,154.209 253.572,249.206 431.638,249.206c178.066,0 342.605,-94.997 431.638,-249.206l-250.35,-144.54c-37.394,64.768 -106.501,104.667 -181.288,104.667c-74.788,0 -143.894,-39.899 -181.288,-104.667l-250.35,144.54Z"
                                    style={{
                                        fill: 'url(#_Radial3)',
                                    }}
                                />
                                <g
                                    id="science1"
                                    transform="matrix(-4.78971e-33,-1,1,-4.78971e-33,-200.091,1191.17)"
                                >
                                    <g transform="matrix(-0.171753,0.98514,-0.98514,-0.171753,956.848,428.594)">
                                        <text
                                            x="298.256px"
                                            y="616.527px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'S'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.107467,0.994209,-0.994209,-0.107467,964.985,420.807)">
                                        <text
                                            x="293.607px"
                                            y="643.553px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'c'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.0594907,0.998229,-0.998229,-0.0594907,976.578,418.748)">
                                        <text
                                            x="291.021px"
                                            y="669.429px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.0117173,0.999931,-0.999931,-0.0117173,974.994,399.301)">
                                        <text
                                            x="290.172px"
                                            y="681.469px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.0514605,0.998675,-0.998675,0.0514605,980.614,380.722)">
                                        <text
                                            x="289.884px"
                                            y="706.583px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'n'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.113756,0.993509,-0.993509,0.113756,985.433,359.468)">
                                        <text
                                            x="291.228px"
                                            y="732.086px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'c'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.17479,0.984606,-0.984606,0.17479,987.198,334.586)">
                                        <text
                                            x="293.992px"
                                            y="756.234px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g id="private-orgs"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('quintuple-helix-collaboration')}>
                                <path
                                    id="background-private-organizations"
                                    d="M930.051,750.794c43.745,-75.769 66.775,-161.717 66.775,-249.207c0,-275.266 -223.148,-498.413 -498.413,-498.413l0,289.08c115.611,0 209.333,93.722 209.333,209.333c0,36.746 -9.672,72.844 -28.045,104.667l250.35,144.54Z"
                                    style={{
                                        fill: 'url(#_Radial4)',
                                    }}
                                />
                                <g
                                    id="private-organizations"
                                    transform="matrix(-4.78971e-33,-1,1,-4.78971e-33,-102.587,1134.88)"
                                >
                                    <g transform="matrix(-0.52826,0.849083,-0.849083,-0.52826,2177.22,390.025)">
                                        <text
                                            x="980.264px"
                                            y="799.831px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'P'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.574791,0.8183,-0.8183,-0.574791,2194.27,505.695)">
                                        <text
                                            x="965.75px"
                                            y="822.945px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'r'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.600397,0.799702,-0.799702,-0.600397,2199.23,574.028)">
                                        <text
                                            x="956.199px"
                                            y="836.482px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.634635,0.772812,-0.772812,-0.634635,2205.78,647.623)">
                                        <text
                                            x="949.803px"
                                            y="845.23px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'v'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.677951,0.735107,-0.735107,-0.677951,2203.36,761.541)">
                                        <text
                                            x="934.863px"
                                            y="863.413px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.714575,0.699559,-0.699559,-0.714575,2190.9,868.508)">
                                        <text
                                            x="918.272px"
                                            y="881.206px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.749345,0.66218,-0.66218,-0.749345,2177.61,960.438)">
                                        <text
                                            x="907.025px"
                                            y="892.364px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.806946,0.590625,-0.590625,-0.806946,2129.9,1136.19)">
                                        <text
                                            x="879.261px"
                                            y="916.189px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'o'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.838481,0.544931,-0.544931,-0.838481,2085.67,1244.43)">
                                        <text
                                            x="858.406px"
                                            y="931.315px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'r'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.863492,0.504363,-0.504363,-0.863492,2049.32,1325.34)">
                                        <text
                                            x="845.306px"
                                            y="939.997px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'g'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.893736,0.448593,-0.448593,-0.893736,1985.27,1436.14)">
                                        <text
                                            x="822.536px"
                                            y="953.209px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.920631,0.390434,-0.390434,-0.920631,1914.36,1539.11)">
                                        <text
                                            x="800.743px"
                                            y="964.134px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'n'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.937569,0.3478,-0.3478,-0.937569,1844.58,1616.76)">
                                        <text
                                            x="777.184px"
                                            y="973.934px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.95184,0.306594,-0.306594,-0.95184,1797,1673.38)">
                                        <text
                                            x="767.074px"
                                            y="977.826px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'z'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.968216,0.250116,-0.250116,-0.968216,1711.94,1752.55)">
                                        <text
                                            x="744.614px"
                                            y="985.048px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.979855,0.199708,-0.199708,-0.979855,1625.41,1818.05)">
                                        <text
                                            x="721.009px"
                                            y="991.005px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.986129,0.16598,-0.16598,-0.986129,1565.78,1857.46)">
                                        <text
                                            x="705.277px"
                                            y="994.156px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.992698,0.120628,-0.120628,-0.992698,1504.19,1901.19)">
                                        <text
                                            x="694.553px"
                                            y="996.123px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'o'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.998366,0.0571395,-0.0571395,-0.998366,1394.05,1958.56)">
                                        <text
                                            x="669.026px"
                                            y="999.208px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'n'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.999997,-0.0025704,0.0025704,-0.999997,1284.55,2002.88)">
                                        <text
                                            x="643.564px"
                                            y="1000.62px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'s'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="area-local-community"
                           className="interactive"
                           onClick={() => this.handleDiagramClick('quintuple-helix-collaboration')}>
                            <path
                                id="background-local-community"
                                d="M218.915,372.303l19.203,-38.844l42.819,-81.089l-31.207,-15.427l1.767,-3.573l32.708,16.169l99.24,-90.194l96.827,-22.54l1.635,-48.128l8.723,1.206l-1.055,47.605l102.631,9.161c-6.933,-38.85 -9.966,-58.109 -9.101,-57.776c0.866,0.333 3.737,0.411 8.614,0.232l10.747,59.169l27.733,10.604l39.173,-11.474l7.248,11.167l-33.876,9.614l104.04,133.067l30.793,-17.476l5.112,5.041l-31.603,18.978l91.734,117.684l12.785,42.686l-18.254,119.199l-15.785,42.423l28.943,6.405l-5.837,11.809l-28.91,-5.619l-74.282,100.051l-68.289,50.201l28.738,29.805c-5.54,2.531 -8.875,3.939 -10.005,4.225c-1.129,0.286 -11.242,-9.326 -30.341,-28.834l-24.05,6.089l-10.218,39.774c-3.67,2.917 -5.425,2.049 -5.266,-2.604c0.159,-4.651 2.36,-16.762 6.599,-36.33l-129.653,-2.261l-144.809,0.356l-7.304,35.368l-10.487,-1.536l9.611,-39.012l-74.032,-33.869l-61.744,-30.522l-15.055,25.184l-10.007,-4.948l15.278,-30.907l-57.426,-84.843l-37.193,8.242l-2.069,-9.534l35.226,-9.099l-0.371,-8.771l-35.916,4.07l-1.162,-8.772l36.626,-5.955l-2.66,-62.755l11.801,-94.786l-24.932,-12.325l2.376,-4.807l24.933,12.324l9.757,-19.738l-26.179,-32.076l8.334,-7.02l25.15,30.125l46.609,-31.957l-29.439,-38.268l9.077,-7.091l25.927,32.727Z"
                                style={{
                                    fill: '#d4ddc2',
                                }}
                            />
                            <path
                                d="M490.63,89.883l-1.055,47.605l102.631,9.161l-0.639,-3.585l-0.616,-3.47l-0.592,-3.355l-0.57,-3.24l-0.547,-3.126l-0.525,-3.011l-0.501,-2.896l-0.242,-1.405l-0.237,-1.376l-0.23,-1.348l-0.226,-1.319l-0.219,-1.29l-0.213,-1.261l-0.208,-1.233l-0.202,-1.204l-0.197,-1.176l-0.191,-1.146l-0.185,-1.118l-0.179,-1.09l-0.174,-1.06l-0.167,-1.032l-0.163,-1.003l-0.156,-0.975l-0.151,-0.946l-0.145,-0.917l-0.139,-0.888l-0.134,-0.86l-0.128,-0.831l-0.122,-0.802l-0.117,-0.774l-0.11,-0.745l-0.105,-0.716l-0.1,-0.687l-0.093,-0.659l-0.088,-0.63l-0.083,-0.602l-0.076,-0.572l-0.071,-0.544l-0.065,-0.516l-0.059,-0.486l-0.054,-0.458l-0.048,-0.43l-0.042,-0.4l-0.037,-0.372l-0.016,-0.175l-0.015,-0.168l-0.013,-0.161l-0.012,-0.154l-0.01,-0.146l-0.009,-0.139l-0.008,-0.132l-0.006,-0.125l-0.005,-0.118l-0.003,-0.111l-0.002,-0.103l0,-0.096l0.001,-0.089l0.002,-0.082l0.004,-0.075l0.005,-0.068l0.007,-0.06l0.008,-0.053l0.01,-0.046l0.005,-0.021l0.006,-0.018l0.006,-0.017l0.006,-0.015l0.007,-0.013l0.007,-0.011l0.007,-0.01l0.008,-0.008l0.008,-0.006l0.009,-0.004l0.009,-0.002l0.009,-0.001l0.01,0.002l0.01,0.003l0.042,0.015l0.045,0.015l0.048,0.015l0.051,0.014l0.053,0.014l0.057,0.014l0.06,0.013l0.062,0.013l0.066,0.012l0.069,0.012l0.071,0.012l0.074,0.011l0.078,0.011l0.08,0.011l0.169,0.02l0.181,0.018l0.193,0.017l0.205,0.016l0.216,0.014l0.228,0.012l0.24,0.011l0.252,0.01l0.263,0.008l0.275,0.006l0.287,0.005l0.298,0.004l0.311,0.002l0.322,0l0.334,-0.001l0.345,-0.002l0.357,-0.004l0.369,-0.005l0.381,-0.007l0.393,-0.009l0.404,-0.01l0.416,-0.011l0.428,-0.013l0.439,-0.015l0.452,-0.016l10.747,59.169l27.733,10.604l39.173,-11.474l7.248,11.167l-33.876,9.614l104.04,133.067l30.793,-17.476l5.112,5.041l-31.603,18.978l91.734,117.684l12.785,42.686l-18.254,119.199l-15.785,42.423l28.943,6.405l-5.837,11.809l-28.91,-5.619l-74.282,100.051l-68.289,50.201l28.738,29.805l-1.013,0.462l-0.961,0.435l-0.91,0.408l-0.858,0.383l-0.409,0.181l-0.397,0.175l-0.384,0.168l-0.37,0.162l-0.358,0.155l-0.345,0.148l-0.332,0.142l-0.319,0.135l-0.307,0.129l-0.293,0.122l-0.28,0.116l-0.268,0.109l-0.254,0.102l-0.242,0.096l-0.228,0.09l-0.216,0.082l-0.203,0.076l-0.19,0.07l-0.177,0.063l-0.164,0.056l-0.151,0.05l-0.138,0.043l-0.125,0.037l-0.058,0.016l-0.055,0.014l-0.013,0.003l-0.015,0.002l-0.015,0.001l-0.016,0l-0.017,-0.001l-0.018,-0.001l-0.018,-0.003l-0.02,-0.003l-0.041,-0.01l-0.045,-0.013l-0.047,-0.017l-0.052,-0.02l-0.054,-0.024l-0.058,-0.028l-0.061,-0.032l-0.064,-0.034l-0.068,-0.039l-0.071,-0.042l-0.074,-0.046l-0.077,-0.05l-0.081,-0.053l-0.084,-0.056l-0.087,-0.061l-0.091,-0.064l-0.094,-0.067l-0.097,-0.072l-0.101,-0.075l-0.103,-0.078l-0.107,-0.082l-0.111,-0.086l-0.113,-0.089l-0.117,-0.093l-0.121,-0.097l-0.123,-0.1l-0.257,-0.211l-0.27,-0.226l-0.283,-0.24l-0.297,-0.255l-0.309,-0.27l-0.323,-0.283l-0.336,-0.299l-0.349,-0.312l-0.362,-0.328l-0.376,-0.342l-0.388,-0.356l-0.402,-0.371l-0.415,-0.385l-0.428,-0.4l-0.441,-0.414l-0.454,-0.429l-0.468,-0.443l-0.48,-0.458l-0.494,-0.472l-0.507,-0.487l-0.52,-0.501l-0.534,-0.516l-0.546,-0.53l-0.56,-0.545l-0.572,-0.559l-0.586,-0.574l-0.6,-0.588l-0.612,-0.603l-0.625,-0.617l-0.639,-0.632l-0.652,-0.647l-0.665,-0.66l-0.678,-0.676l-0.691,-0.689l-0.704,-0.705l-0.718,-0.718l-0.731,-0.734l-0.744,-0.747l-0.757,-0.763l-0.77,-0.776l-0.783,-0.791l-0.797,-0.806l-0.81,-0.82l-0.822,-0.835l-0.836,-0.849l-0.85,-0.864l-0.862,-0.878l-1.764,-1.8l-24.05,6.089l-10.218,39.774l-0.171,0.134l-0.167,0.129l-0.165,0.123l-0.163,0.117l-0.159,0.112l-0.079,0.053l-0.078,0.053l-0.077,0.051l-0.076,0.049l-0.076,0.049l-0.075,0.047l-0.075,0.045l-0.074,0.044l-0.073,0.043l-0.072,0.041l-0.072,0.04l-0.071,0.039l-0.07,0.037l-0.069,0.036l-0.069,0.034l-0.068,0.033l-0.068,0.032l-0.067,0.03l-0.066,0.029l-0.065,0.027l-0.065,0.026l-0.064,0.025l-0.063,0.023l-0.062,0.022l-0.062,0.021l-0.061,0.019l-0.061,0.018l-0.059,0.016l-0.059,0.015l-0.059,0.014l-0.057,0.012l-0.057,0.011l-0.057,0.009l-0.055,0.008l-0.055,0.007l-0.054,0.005l-0.053,0.004l-0.053,0.003l-0.052,0.001l-0.051,0l-0.051,-0.002l-0.05,-0.003l-0.049,-0.005l-0.049,-0.005l-0.047,-0.008l-0.048,-0.008l-0.046,-0.01l-0.046,-0.011l-0.045,-0.013l-0.044,-0.014l-0.044,-0.016l-0.042,-0.017l-0.043,-0.018l-0.041,-0.019l-0.041,-0.022l-0.04,-0.022l-0.039,-0.024l-0.039,-0.025l-0.038,-0.027l-0.037,-0.027l-0.037,-0.03l-0.036,-0.031l-0.035,-0.032l-0.034,-0.033l-0.034,-0.035l-0.033,-0.036l-0.033,-0.038l-0.031,-0.039l-0.031,-0.041l-0.031,-0.041l-0.029,-0.044l-0.029,-0.044l-0.028,-0.046l-0.028,-0.048l-0.026,-0.048l-0.026,-0.05l-0.026,-0.052l-0.024,-0.053l-0.024,-0.054l-0.024,-0.056l-0.022,-0.057l-0.022,-0.058l-0.021,-0.06l-0.021,-0.061l-0.019,-0.063l-0.02,-0.064l-0.018,-0.065l-0.018,-0.067l-0.016,-0.068l-0.017,-0.07l-0.015,-0.071l-0.015,-0.072l-0.014,-0.074l-0.014,-0.075l-0.012,-0.076l-0.012,-0.078l-0.012,-0.079l-0.01,-0.081l-0.01,-0.082l-0.01,-0.083l-0.008,-0.085l-0.008,-0.086l-0.007,-0.088l-0.007,-0.089l-0.005,-0.09l-0.005,-0.092l-0.005,-0.093l-0.003,-0.094l-0.005,-0.194l-0.003,-0.198l0.001,-0.204l0.003,-0.21l0.006,-0.216l0.009,-0.223l0.012,-0.234l0.015,-0.246l0.018,-0.256l0.021,-0.267l0.024,-0.278l0.026,-0.29l0.03,-0.3l0.033,-0.31l0.036,-0.322l0.039,-0.333l0.042,-0.344l0.045,-0.354l0.047,-0.366l0.051,-0.376l0.054,-0.388l0.057,-0.398l0.059,-0.409l0.063,-0.421l0.066,-0.431l0.069,-0.442l0.071,-0.453l0.075,-0.463l0.078,-0.475l0.081,-0.486l0.083,-0.497l0.087,-0.507l0.09,-0.519l0.092,-0.529l0.096,-0.54l0.099,-0.552l0.101,-0.562l0.105,-0.573l0.107,-0.584l0.111,-0.595l0.114,-0.606l0.116,-0.617l0.12,-0.628l0.122,-0.638l0.126,-0.65l0.128,-0.66l0.132,-0.672l0.134,-0.682l0.138,-0.694l0.14,-0.704l0.144,-0.715l0.146,-0.726l0.15,-0.737l0.308,-1.507l0.32,-1.55l0.331,-1.594l0.344,-1.638l0.356,-1.682l0.367,-1.725l0.38,-1.769l0.391,-1.813l-129.653,-2.261l-144.809,0.356l-7.304,35.368l-10.487,-1.536l9.611,-39.012l-74.032,-33.869l-61.744,-30.522l-15.055,25.184l-10.007,-4.948l15.278,-30.907l-57.426,-84.843l-37.193,8.242l-2.069,-9.534l35.226,-9.099l-0.371,-8.771l-35.916,4.07l-1.162,-8.772l36.626,-5.955l-2.66,-62.755l11.801,-94.786l-24.932,-12.325l2.376,-4.807l24.933,12.324l9.757,-19.738l-26.179,-32.076l8.334,-7.02l25.15,30.125l46.609,-31.957l-29.439,-38.268l9.077,-7.091l25.927,32.727l19.203,-38.844l42.819,-81.089l-31.207,-15.427l1.767,-3.573l32.708,16.169l99.24,-90.194l96.827,-22.54l1.635,-48.128l8.723,1.206Zm-103.825,75.867l-100.393,91.243l-42.06,79.652l-19.162,38.76l-9.561,1.012l3.27,4.25l-1.59,10.042l-49.712,34.083l0.11,0.134l-11.753,23.777l-1.447,0.49l-11.988,96.288l2.898,68.381l-4.209,0.684l4.398,3.765l0.492,11.606l0.053,-0.011l62.376,92.156l-1.22,2.468l0.231,-0.386l67.444,33.339l79.208,36.237l-0.526,2.135l145.384,-0.358l129.723,2.263l2.354,2.97l0.662,-2.577l31.978,-8.097l4.579,4.672l0.04,0.04l0.661,-7.774l67.442,-49.578l76.283,-102.747l6.957,1.352l-4.721,-8.675l15.534,-41.751l17.907,-116.932l-11.956,-39.917l-90.926,-116.647l0.438,-2.355l-1.015,0.576l-107.758,-137.823l3.023,-9.27l-10.35,3.032l-33.619,-12.855l-0.745,-4.099l-3.956,4.316l-109.151,-9.742l0.008,-0.392l-95.635,22.263Z"
                                style={{
                                    fill: '#dd8817',
                                }}
                            />
                            <g
                                id="local-community"
                                transform="matrix(0.707107,0.707107,-0.707107,0.707107,423.202,-530.324)"
                            >
                                <g transform="matrix(0.219051,-0.975713,0.975713,0.219051,-214.674,976.35)">
                                    <text
                                        x="502.586px"
                                        y="622.281px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'L'}
                                    </text>
                                </g>
                                <g transform="matrix(0.301308,-0.953527,0.953527,0.301308,-216.112,902.561)">
                                    <text
                                        x="507.821px"
                                        y="598.748px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'o'}
                                    </text>
                                </g>
                                <g transform="matrix(0.384492,-0.923129,0.923129,0.384492,-212.667,829.412)">
                                    <text
                                        x="515.635px"
                                        y="574.183px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'c'}
                                    </text>
                                </g>
                                <g transform="matrix(0.459799,-0.888023,0.888023,0.459799,-206.448,764.295)">
                                    <text
                                        x="524.979px"
                                        y="551.834px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'a'}
                                    </text>
                                </g>
                                <g transform="matrix(0.515248,-0.857041,0.857041,0.515248,-194.489,716.784)">
                                    <text
                                        x="536.393px"
                                        y="530.321px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'l'}
                                    </text>
                                </g>
                                <g transform="matrix(0.5999,-0.800075,0.800075,0.5999,-189.657,643.134)">
                                    <text
                                        x="548.205px"
                                        y="511.194px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'c'}
                                    </text>
                                </g>
                                <g transform="matrix(0.666815,-0.745223,0.745223,0.666815,-178.977,583.224)">
                                    <text
                                        x="562.75px"
                                        y="491.768px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'o'}
                                    </text>
                                </g>
                                <g transform="matrix(0.744477,-0.667648,0.667648,0.744477,-167.261,507.735)">
                                    <text
                                        x="579.692px"
                                        y="472.383px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'m'}
                                    </text>
                                </g>
                                <g transform="matrix(0.825156,-0.564905,0.564905,0.825156,-146.423,421.507)">
                                    <text
                                        x="607.714px"
                                        y="447.292px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'m'}
                                    </text>
                                </g>
                                <g transform="matrix(0.882111,-0.471041,0.471041,0.882111,-125.537,351.196)">
                                    <text
                                        x="638.858px"
                                        y="426.398px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'u'}
                                    </text>
                                </g>
                                <g transform="matrix(0.92068,-0.390317,0.390317,0.92068,-109.309,290.986)">
                                    <text
                                        x="661.289px"
                                        y="414.439px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'n'}
                                    </text>
                                </g>
                                <g transform="matrix(0.943755,-0.330645,0.330645,0.943755,-95.302,249.199)">
                                    <text
                                        x="684.83px"
                                        y="404.725px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'i'}
                                    </text>
                                </g>
                                <g transform="matrix(0.958195,-0.286117,0.286117,0.958195,-85.6985,215.642)">
                                    <text
                                        x="695.081px"
                                        y="401.083px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'t'}
                                    </text>
                                </g>
                                <g transform="matrix(0.976225,-0.216762,0.216762,0.976225,-69.0258,163.42)">
                                    <text
                                        x="710.442px"
                                        y="396.366px"
                                        style={{
                                            fontFamily: "'Inter-Medium', 'Inter'",
                                            fontWeight: 500,
                                            fontSize: 42,
                                        }}
                                    >
                                        {'y'}
                                    </text>
                                </g>
                            </g>
                        </g>
                        <g
                            id="donut-heat-water-electricity-food"
                        >
                            <g id="water"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('water')}>
                                <path
                                    id="background-water"
                                    d="M659.992,340.008c8.815,-8.815 13.259,-21.09 12.129,-33.505c-1.13,-12.415 -7.716,-23.686 -17.977,-30.765c-92.534,-63.755 -215.754,-63.755 -308.287,0.002c-10.26,7.078 -16.846,18.349 -17.976,30.763c-1.13,12.415 3.314,24.689 12.128,33.504c32.947,32.949 79.188,79.19 79.188,79.19c44.626,-44.626 116.98,-44.626 161.606,0c0,0 46.241,-46.241 79.189,-79.189Z"
                                    style={{
                                        fill: '#7ea9cb',
                                    }}
                                />
                                <g
                                    id="water1"
                                    transform="matrix(0.707107,-0.707107,0.707107,0.707107,-322.42,493.581)"
                                >
                                    <g transform="matrix(0.839811,0.54288,-0.54288,0.839811,331.804,-295.829)">
                                        <text
                                            x="667.183px"
                                            y="414.325px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'w'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.748727,0.662878,-0.662878,0.748727,462.554,-352.644)">
                                        <text
                                            x="696.429px"
                                            y="433.805px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.674794,0.738006,-0.738006,0.674794,564.534,-380.881)">
                                        <text
                                            x="714.444px"
                                            y="450.122px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.592285,0.805728,-0.805728,0.592285,667.893,-396.211)">
                                        <text
                                            x="725.444px"
                                            y="461.842px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.497497,0.867466,-0.867466,0.497497,790.215,-399.75)">
                                        <text
                                            x="740.15px"
                                            y="482.195px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'r'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g id="electricity"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('electricity')}>
                                <path
                                    id="background-electricity"
                                    d="M659.992,659.992c8.815,8.815 21.09,13.259 33.505,12.129c12.415,-1.13 23.686,-7.716 30.765,-17.977c63.755,-92.534 63.755,-215.754 -0.002,-308.287c-7.078,-10.26 -18.349,-16.846 -30.763,-17.976c-12.415,-1.13 -24.689,3.314 -33.504,12.128c-32.949,32.947 -79.19,79.188 -79.19,79.188c44.626,44.626 44.626,116.98 0,161.606c0,0 46.241,46.241 79.189,79.189Z"
                                    style={{
                                        fill: '#d3ac71',
                                    }}
                                />
                                <g
                                    id="electricity1"
                                    transform="matrix(0.707107,0.707107,-0.707107,0.707107,506.419,-322.42)"
                                >
                                    <g transform="matrix(0.94871,0.316148,-0.316148,0.94871,158.231,-177.581)">
                                        <text
                                            x="626.413px"
                                            y="398.87px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.914935,0.403601,-0.403601,0.914935,219.623,-227.751)">
                                        <text
                                            x="650.107px"
                                            y="407.139px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'l'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.873237,0.487295,-0.487295,0.873237,284.099,-269.592)">
                                        <text
                                            x="660.226px"
                                            y="411.263px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.803951,0.594696,-0.594696,0.803951,385.597,-322.613)">
                                        <text
                                            x="682.106px"
                                            y="423.529px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'c'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.73876,0.673969,-0.673969,0.73876,478.58,-358.324)">
                                        <text
                                            x="701.508px"
                                            y="438.178px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.675069,0.737754,-0.737754,0.675069,563.036,-380.421)">
                                        <text
                                            x="713.391px"
                                            y="448.976px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'r'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.625501,0.780224,-0.780224,0.625501,631.203,-392.551)">
                                        <text
                                            x="724.518px"
                                            y="461.241px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.552002,0.833843,-0.833843,0.552002,719.282,-399.644)">
                                        <text
                                            x="731.563px"
                                            y="469.565px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'c'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.474348,0.880338,-0.880338,0.474348,822.77,-398.026)">
                                        <text
                                            x="744.683px"
                                            y="489.955px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.412668,0.910881,-0.910881,0.412668,895.408,-389.704)">
                                        <text
                                            x="749.896px"
                                            y="499.483px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.313947,0.94944,-0.94944,0.313947,1007.23,-365.766)">
                                        <text
                                            x="756.71px"
                                            y="514.078px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'y'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g id="food"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('bio-mass')}>
                                <path
                                    id="background-food"
                                    d="M340.008,659.992c-8.815,8.815 -13.259,21.09 -12.129,33.505c1.13,12.415 7.716,23.686 17.977,30.765c92.534,63.755 215.754,63.755 308.287,-0.002c10.26,-7.078 16.846,-18.349 17.976,-30.763c1.13,-12.415 -3.314,-24.689 -12.128,-33.504c-32.947,-32.949 -79.188,-79.19 -79.188,-79.19c-44.626,44.626 -116.98,44.626 -161.606,0c0,0 -46.241,46.241 -79.189,79.189Z"
                                    style={{
                                        fill: '#7bc76c',
                                    }}
                                />
                                <g
                                    id="food1"
                                    transform="matrix(-0.707107,0.707107,-0.707107,-0.707107,1322.42,506.419)"
                                >
                                    <g transform="matrix(-0.381775,-0.924255,0.924255,-0.381775,566.012,1428.9)">
                                        <text
                                            x="760.894px"
                                            y="525.15px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'b'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.467325,-0.884086,0.884086,-0.467325,658.457,1397.87)">
                                        <text
                                            x="750.349px"
                                            y="500.572px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'i'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.548864,-0.835911,0.835911,-0.548864,744.501,1383.33)">
                                        <text
                                            x="745.536px"
                                            y="490.762px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'o'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.719638,-0.694349,0.694349,-0.719638,926.482,1293.97)">
                                        <text
                                            x="724.479px"
                                            y="459.94px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'m'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.819269,-0.57341,0.57341,-0.819269,1019.05,1189.73)">
                                        <text
                                            x="697.018px"
                                            y="434.269px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.88444,-0.466654,0.466654,-0.88444,1079.61,1108.12)">
                                        <text
                                            x="677.011px"
                                            y="420.387px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'s'}
                                        </text>
                                    </g>
                                    <g transform="matrix(-0.93363,-0.358239,0.358239,-0.93363,1123.1,1027.49)">
                                        <text
                                            x="656.732px"
                                            y="409.708px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'s'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g id="Heat"
                               className="interactive"
                               onClick={() => this.handleDiagramClick('heat')}>
                                <path
                                    id="background-heat"
                                    d="M340.008,340.008c-8.815,-8.815 -21.09,-13.259 -33.505,-12.129c-12.415,1.13 -23.686,7.716 -30.765,17.977c-63.755,92.534 -63.755,215.754 0.002,308.287c7.078,10.26 18.349,16.846 30.763,17.976c12.415,1.13 24.689,-3.314 33.504,-12.128c32.949,-32.947 79.19,-79.188 79.19,-79.188c-44.626,-44.626 -44.626,-116.98 0,-161.606c0,0 -46.241,-46.241 -79.189,-79.189Z"
                                    style={{
                                        fill: '#db7a71',
                                    }}
                                />
                                <g
                                    id="heat"
                                    transform="matrix(-0.707107,-0.707107,0.707107,-0.707107,493.581,1322.42)"
                                >
                                    <g transform="matrix(0.815598,0.57862,-0.57862,0.815598,368.738,-314.843)">
                                        <text
                                            x="678.328px"
                                            y="421.094px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'h'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.733209,0.680003,-0.680003,0.733209,483.058,-359.189)">
                                        <text
                                            x="699.284px"
                                            y="436.021px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'e'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.643106,0.765778,-0.765778,0.643106,603.135,-387.821)">
                                        <text
                                            x="717.635px"
                                            y="453.154px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'a'}
                                        </text>
                                    </g>
                                    <g transform="matrix(0.558562,0.829463,-0.829463,0.558562,715.092,-399.714)">
                                        <text
                                            x="733.077px"
                                            y="471.973px"
                                            style={{
                                                fontFamily: "'Inter-Medium', 'Inter'",
                                                fontWeight: 500,
                                                fontSize: 42,
                                            }}
                                        >
                                            {'t'}
                                        </text>
                                    </g>
                                </g>
                            </g>
                            <g id="circular-arrow">
                                <path
                                    d="M373.013,506.105l-10.552,0c2.313,46.837 29.671,91.359 70.89,114.248c20.295,11.269 43.587,17.207 66.761,17.243l-0.005,3c-35.554,-0.055 -70.953,-14.089 -96.82,-38.609c-26.118,-24.756 -42.093,-59.63 -43.827,-95.882l-10.868,0l12.21,-12.21l12.211,12.21Z"
                                    style={{
                                        fillRule: 'nonzero',
                                    }}
                                />
                                <path
                                    d="M637.777,493.895c-1.444,-31.482 -14.013,-62.768 -35.4,-86.437c-25.791,-28.543 -63.8,-45.416 -102.27,-45.476l0.005,-3c0.151,0 0.302,0 0.453,0.001c48.33,0.23 95.659,27.004 120.611,68.906c11.849,19.898 18.6,42.718 19.609,66.006l10.623,0l-12.21,12.21l-12.211,-12.21l10.79,0Z"
                                    style={{
                                        fillRule: 'nonzero',
                                    }}
                                />
                                <path
                                    d="M493.306,359.164l0,-10.572l12.211,12.21l-12.211,12.211l0,-10.843c-45.395,2.438 -88.675,28.34 -111.897,67.611c-12.473,21.093 -19.06,45.661 -19.107,70.011l-3,-0.006c0.061,-31.641 11.059,-63.203 30.838,-87.903c24.934,-31.136 63.391,-50.651 103.166,-52.719Z"
                                    style={{
                                        fillRule: 'nonzero',
                                    }}
                                />
                                <path
                                    d="M507.202,637.391c45.721,-2.567 89.597,-29.039 112.654,-69.393c11.795,-20.643 18.027,-44.529 18.061,-68.211c1,0.001 2,0.003 3,0.004c-0.044,30.564 -10.262,60.97 -28.754,85.237c-24.726,32.448 -63.883,53.161 -104.961,55.372l0,11.008l-12.211,-12.21l12.211,-12.211l0,10.404Z"
                                    style={{
                                        fillRule: 'nonzero',
                                    }}
                                />
                            </g>
                        </g>
                        <g id="core-P2P-production"
                           className="interactive"
                           onClick={() => this.handleDiagramClick('p2p-production')}>
                            <circle
                                cx={500}
                                cy={500}
                                r={114.5}
                                style={{
                                    fill: '#f3f3f3',
                                }}
                            />
                            <g transform="matrix(1.06512,0,0,1.06512,-31.3954,-40.3591)">
                                <text
                                    x="464.324px"
                                    y="501.462px"
                                    style={{
                                        fontFamily: "'Inter-Medium', 'Inter'",
                                        fontWeight: 500,
                                        fontSize: 36,
                                    }}
                                >
                                    {'P'}
                                    <tspan x="487.695px 510.133px " y="501.462px 501.462px ">
                                        {'2P'}
                                    </tspan>
                                </text>
                                <text
                                    x="402.902px"
                                    y="537.462px"
                                    style={{
                                        fontFamily: "'Inter-Medium', 'Inter'",
                                        fontWeight: 500,
                                        fontSize: 36,
                                    }}
                                >
                                    {'P'}
                                    <tspan
                                        x="426.273px 440.465px 462.507px 485.393px 507.153px 527.955px 541.7px 551.022px 573.064px "
                                        y="537.462px 537.462px 537.462px 537.462px 537.462px 537.462px 537.462px 537.462px 537.462px "
                                    >
                                        {'roduction'}
                                    </tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <radialGradient
                            id="_Radial2"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(496.826,0,0,496.826,496.826,500)"
                        >
                            <stop
                                offset={0}
                                style={{
                                    stopColor: '#fff',
                                    stopOpacity: 0,
                                }}
                            />
                            <stop
                                offset={0.64}
                                style={{
                                    stopColor: '#fff1d9',
                                    stopOpacity: 0.14902,
                                }}
                            />
                            <stop
                                offset={0.84}
                                style={{
                                    stopColor: '#ffcd75',
                                    stopOpacity: 0.541176,
                                }}
                            />
                            <stop
                                offset={1}
                                style={{
                                    stopColor: '#ffa200',
                                    stopOpacity: 1,
                                }}
                            />
                        </radialGradient>
                        <radialGradient
                            id="_Radial3"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(496.826,0,0,496.826,496.826,500)"
                        >
                            <stop
                                offset={0}
                                style={{
                                    stopColor: '#fff',
                                    stopOpacity: 0,
                                }}
                            />
                            <stop
                                offset={0.64}
                                style={{
                                    stopColor: '#d9f9ff',
                                    stopOpacity: 0.14902,
                                }}
                            />
                            <stop
                                offset={0.84}
                                style={{
                                    stopColor: '#75e9ff',
                                    stopOpacity: 0.541176,
                                }}
                            />
                            <stop
                                offset={1}
                                style={{
                                    stopColor: '#00d6ff',
                                    stopOpacity: 1,
                                }}
                            />
                        </radialGradient>
                        <radialGradient
                            id="_Radial4"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(496.826,0,0,496.826,496.826,500)"
                        >
                            <stop
                                offset={0}
                                style={{
                                    stopColor: '#fff',
                                    stopOpacity: 0,
                                }}
                            />
                            <stop
                                offset={0.64}
                                style={{
                                    stopColor: '#ffecfd',
                                    stopOpacity: 0.14902,
                                }}
                            />
                            <stop
                                offset={0.84}
                                style={{
                                    stopColor: '#ffbaf9',
                                    stopOpacity: 0.541176,
                                }}
                            />
                            <stop
                                offset={1}
                                style={{
                                    stopColor: '#ff80f4',
                                    stopOpacity: 1,
                                }}
                            />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        );
    }
}

export default withRouter(Diagram);
