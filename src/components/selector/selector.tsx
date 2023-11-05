import React, {ChangeEvent} from "react";
import {FormControl, InputLabel} from "@material-ui/core";
import {NativeSelect} from "@mui/material";
import styles from "../selector/selector.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setProjectAC} from "../../state/app-reducer";
import {useAppDispatch} from "../../hooks/hooks";

export const Selector = React.memo(() => {
  const dispatch = useAppDispatch()
  const project = useSelector<AppRootStateType, string>(state => state.app.project)

  const switchProject = (e: ChangeEvent<HTMLSelectElement>) => {
    e.persist()
    dispatch(setProjectAC(e.currentTarget.value))
  }

  return <div className={styles.selector}>
    <div className={styles.items}>
      <FormControl fullWidth>
        <InputLabel variant="outlined" htmlFor="uncontrolled-native">
          Project
        </InputLabel>
        <NativeSelect
          onChange={switchProject}
          defaultValue={project}
          inputProps={{
            name: 'project',
            defaultValue: project,
            id: 'uncontrolled-native',
          }}
        >
          <option value={'youtube.com'}>youtube.com</option>
          <option value={'vimeo.com'} disabled={true}>vimeo.com</option>
        </NativeSelect>
      </FormControl>
    </div>
  </div>
})