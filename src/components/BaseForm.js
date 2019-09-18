import React from 'react'
import { Input, Select, Form, Button, Checkbox, DatePicker, message} from 'antd'
import { connectAlita } from 'redux-alita';

const FormItem = Form.Item;
const Option = Select.Option;
class FilterForm extends React.Component{

    state = {
        _disabled: true
    }

    handleFilterSubmit = ()=>{
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
    }

    reset = ()=>{
        this.props.form.resetFields();
    }

    // 删除操作
    handleDelete = (key) => {
        this.props.callDeleteFn(key)
    }

    // 下拉框
    getOptionList = (data) => {
        if(!data){
            return [];
        }
        let options = [] 
        data.map((item,index) => {
            options.push(<Option value={item.id} key={index}>{item.name}</Option>)
        })
        return options;
    }

    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = [];
        if (formList && formList.length>0){
            formList.forEach((item,i)=>{
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder;
                let width = item.width;
                let list = item.list;
                if (item.type === '时间查询'){
                    const begin_time = <FormItem label="起始时间查询" key={field}>
                        {
                            getFieldDecorator('begin_time')(
                                <DatePicker showTime placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                            )
                        }
                    </FormItem>;
                    formItemList.push(begin_time)
                    const end_time = <FormItem label="~" colon={false} key={field}>
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker showTime placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                            )
                        }
                    </FormItem>;
                    formItemList.push(end_time)
                }else if(item.type === 'INPUT'){
                    const INPUT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field],{
                                initialValue: initialValue
                            })(
                                <Input type="text" placeholder={placeholder} />
                            )
                        }
                    </FormItem>;
                    formItemList.push(INPUT)
                } else if (item.type === 'SELECT') {
                    const SELECT = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Select
                                    style={{ width: width }}
                                    placeholder={placeholder}
                                >
                                {
                                    this.getOptionList(list)
                                }
                                </Select>
                            )
                        }
                    </FormItem>;
                    formItemList.push(SELECT)
                } else if (item.type === 'CHECKBOX') {
                    const CHECKBOX = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field], {
                                valuePropName: 'checked',
                                initialValue: initialValue //true | false
                            })(
                                <Checkbox>
                                    {label}
                                </Checkbox>
                            )
                        }
                    </FormItem>;
                    formItemList.push(CHECKBOX)
                } else if( item.type === 'VIDEONAME' ){
                    const INPUT = <FormItem label={label} key ={field} >
                        {
                            getFieldDecorator([field])(
                                <Input 
                                    type="text" 
                                    placeholder="请输入搜索名称"
                                    style={{ width: width }}
                                />
                            )
                        }
                    </FormItem>;
                        formItemList.push(INPUT)
                }
            })
        }
        return formItemList;
    }
    render(){

        // 读取中转state
        const status = this.props.status,
              RowsKeyArr = this.props.Rowskey;

        return (
            <Form layout="inline">
                { this.initFormList() }
                <FormItem>
                    <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                    <Button 
                        type="danger" 
                        disabled={status} 
                        onClick={() => {
                            this.handleDelete(RowsKeyArr)
                        }}
                    >删除</Button>
                </FormItem>
            </Form>
        );
    }
}
export default connectAlita(['_disable'])(Form.create({})(FilterForm));