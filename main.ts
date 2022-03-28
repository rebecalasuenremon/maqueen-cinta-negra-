basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        }
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
