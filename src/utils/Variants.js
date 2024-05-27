export const fadeInVariant ={
    hidden: {
        scale: 0.5,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 0.5,
        }
    }
};

export const fadeInLeftVariant ={
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 0.5,
        }
    }
};

export const fadeInRightVariant ={
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 0.5,
        }
    }
};

export const fadeInTopVariant = {
    hidden: {
        y: -30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 0.5,
        }
    }
};

export const fadeInBottomVariant = {
    hidden: {
        y: 30,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 0.5,
        }
    }
};

export const slideInLeft = {
    hidden: {
        x: '-100vh',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'tween',
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        x: '-100vh',
        
        transition: {
            type: 'tween',
            duration: 0.5,
        }
    }
};