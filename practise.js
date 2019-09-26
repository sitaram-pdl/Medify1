import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    View,
    SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';

export default class Example extends Component {
    state = {
        visibleModalId: null,
    };

    renderModalContent = () => (
        <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button
                onPress={() => this.setState({ visibleModal: null })}
                title="Close"
            />
        </View>
    );

    handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y,
        });
    };

    handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.setState({ visibleModal: 'default' })}
                    title="Default"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'sliding' })}
                    title="Sliding from the sides"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'slow' })}
                    title="Sloooow"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'fancy' })}
                    title="Fancy!"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'bottom' })}
                    title="Bottom half"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'backdropPress' })}
                    title="Close on backdrop press"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'swipeable' })}
                    title="Swipeable"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'scrollable' })}
                    title="Scrollable"
                />
                <Button
                    onPress={() => this.setState({ visibleModal: 'customBackdrop' })}
                    title="Custom backdrop"
                />
                <Modal isVisible={this.state.visibleModal === 'default'}>
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'sliding'}
                    animationIn="slideInLeft"
                    animationOut="slideOutRight"
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'slow'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={800}
                    backdropTransitionOutTiming={800}
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'fancy'}
                    backdropColor="#B4B3DB"
                    backdropOpacity={0.8}
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'bottom'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    swipeDirection={['up', 'left', 'right', 'down']}
                    style={styles.bottomModal}
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'backdropPress'}
                    onBackdropPress={() => this.setState({ visibleModal: null })}
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'swipeable'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    swipeDirection={['down']}
                >
                    {this.renderModalContent()}
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'scrollable'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    swipeDirection="down"
                    scrollTo={this.handleScrollTo}
                    scrollOffset={this.state.scrollOffset}
                    scrollOffsetMax={400 - 300} // content height - ScrollView height
                    style={styles.bottomModal}
                >
                    <View style={styles.scrollableModal}>
                        <ScrollView
                            ref={ref => (this.scrollViewRef = ref)}
                            onScroll={this.handleOnScroll}
                            scrollEventThrottle={16}
                        >
                            <View style={styles.scrollableModalContent1}>
                                <Text style={styles.scrollableModalText1}>You can scroll me up! 👆</Text>
                            </View>
                            <View style={styles.scrollableModalContent2}>
                                <Text style={styles.scrollableModalText2}>Same here as well! ☝</Text>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
                <Modal
                    isVisible={this.state.visibleModal === 'customBackdrop'}
                    customBackdrop={
                        <SafeAreaView style={styles.customBackdrop}>
                            <Text style={styles.customBackdropText}>
                                I'm in the backdrop! 👋
              </Text>
                        </SafeAreaView>
                    }
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
    customBackdrop: {
        flex: 1,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
    },
    customBackdropText: {
        marginTop: 10,
        fontSize: 17,
    },
});